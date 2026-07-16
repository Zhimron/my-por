"""Create the lightweight looping GIF used by the About section."""

from pathlib import Path
import math

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "assets" / "about-coding-scene.png"
OUTPUT = ROOT / "src" / "assets" / "about-coding-scene.gif"
STATIC_OUTPUT = ROOT / "src" / "assets" / "about-coding-scene.webp"
SIZE = 420
FRAME_COUNT = 20


def make_frame(base: Image.Image, index: int) -> Image.Image:
    phase = (index / FRAME_COUNT) * math.tau
    scale = SIZE / 480
    px = lambda value: int(value * scale)
    frame = ImageEnhance.Brightness(base).enhance(0.98 + 0.025 * math.sin(phase))

    # A soft breathing glow around the monitor.
    glow = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_alpha = int(20 + 13 * (0.5 + 0.5 * math.sin(phase)))
    glow_draw.rounded_rectangle(
        (px(126), px(132), px(358), px(321)),
        radius=px(20),
        fill=(32, 211, 238, glow_alpha),
        outline=(168, 85, 247, glow_alpha + 8),
        width=max(1, px(4)),
    )
    glow = glow.filter(ImageFilter.GaussianBlur(px(18)))
    frame = Image.alpha_composite(frame.convert("RGBA"), glow)

    details = Image.new("RGBA", frame.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(details)

    # Scan line moving through the code window.
    scan_y = px(154 + int((index / (FRAME_COUNT - 1)) * 122))
    draw.rectangle((px(142), scan_y, px(347), scan_y + max(1, px(2))), fill=(103, 232, 249, 24))

    # A few deterministic status pixels blink at different intervals.
    pixels = [(184, 166), (231, 190), (284, 215), (330, 247), (258, 267)]
    for pixel_index, (x, y) in enumerate(pixels):
        if (index + pixel_index * 2) % 7 < 3:
            draw.rectangle((px(x), px(y), px(x + 3), px(y + 3)), fill=(110, 231, 183, 160))

    # Steam above the cup gently shifts from side to side.
    steam_x = px(401 + int(math.sin(phase) * 3))
    draw.arc((steam_x - px(7), px(258), steam_x + px(7), px(281)), 255, 95, fill=(224, 231, 255, 105), width=max(1, px(2)))
    draw.arc((steam_x - px(4), px(247), steam_x + px(9), px(269)), 75, 245, fill=(196, 181, 253, 80), width=max(1, px(2)))

    return Image.alpha_composite(frame, details).convert("RGB")


def main() -> None:
    base = Image.open(SOURCE).convert("RGB")
    base = base.resize((SIZE, SIZE), Image.Resampling.LANCZOS)
    base.save(STATIC_OUTPUT, "WEBP", quality=84, method=6)
    frames = [make_frame(base, index) for index in range(FRAME_COUNT)]

    palette = frames[0].quantize(colors=80, method=Image.Quantize.MEDIANCUT)
    paletted_frames = [
        frame.quantize(palette=palette, dither=Image.Dither.FLOYDSTEINBERG)
        for frame in frames
    ]
    paletted_frames[0].save(
        OUTPUT,
        save_all=True,
        append_images=paletted_frames[1:],
        duration=100,
        loop=0,
        optimize=True,
        disposal=2,
    )
    print(f"Created {OUTPUT} ({OUTPUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
