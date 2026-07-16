import { useEffect, useReducer, useRef, type KeyboardEvent } from 'react';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
  type Variants,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Gamepad2,
  LogOut,
  Play,
  RefreshCw,
  Trophy,
} from 'lucide-react';
import { portfolio, skillCategories } from '../../data/portfolio';
import type { Skill, SkillCategory } from '../../data/types';
import SectionHeading from '../ui/SectionHeading';
import SkillIcon from '../ui/SkillIcon';

const categoryStyles: Record<SkillCategory, string> = {
  Languages:
    'border-amber-100 bg-amber-300 text-amber-950 shadow-amber-500/30',
  Frontend: 'border-sky-100 bg-sky-300 text-sky-950 shadow-sky-500/30',
  Backend:
    'border-emerald-100 bg-emerald-300 text-emerald-950 shadow-emerald-500/30',
  Databases: 'border-rose-100 bg-rose-300 text-rose-950 shadow-rose-500/30',
  'AI/ML':
    'border-violet-100 bg-violet-300 text-violet-950 shadow-violet-500/30',
  Cloud: 'border-cyan-100 bg-cyan-300 text-cyan-950 shadow-cyan-500/30',
  DevOps:
    'border-orange-100 bg-orange-300 text-orange-950 shadow-orange-500/30',
  Tools: 'border-slate-100 bg-slate-300 text-slate-950 shadow-slate-500/30',
};

const categoryAccents: Record<SkillCategory, string> = {
  Languages: 'bg-amber-400 text-amber-950',
  Frontend: 'bg-sky-400 text-sky-950',
  Backend: 'bg-emerald-400 text-emerald-950',
  Databases: 'bg-rose-400 text-rose-950',
  'AI/ML': 'bg-violet-400 text-violet-950',
  Cloud: 'bg-cyan-400 text-cyan-950',
  DevOps: 'bg-orange-400 text-orange-950',
  Tools: 'bg-slate-300 text-slate-950',
};

const groupedSkills = skillCategories
  .map((category) => ({
    category,
    skills: portfolio.skills.filter((skill) => skill.category === category),
  }))
  .filter((group) => group.skills.length > 0);

const gameLanes = groupedSkills.map((group) => group.category);
const GAME_LENGTH = 10;

/** Interleaves categories so every lane appears early in a short game. */
const createGameQueue = () => {
  const longestStack = Math.max(...groupedSkills.map((group) => group.skills.length));
  const queue: Skill[] = [];

  for (let row = 0; row < longestStack; row += 1) {
    groupedSkills.forEach((group) => {
      const skill = group.skills[row];
      if (skill) queue.push(skill);
    });
  }

  return queue.slice(0, GAME_LENGTH);
};

const gameQueue = createGameQueue();
const spanClasses = ['col-span-2', 'col-span-3', 'col-span-4'] as const;

const getSkillSpan = (skill: Skill) => {
  if (skill.name.length > 8) return 4;
  if (skill.name.length > 4) return 3;
  return 2;
};

const getBlockVariants = (prefersReducedMotion: boolean): Variants => ({
  hidden: prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: -110, rotate: -1.5, scale: 0.98 },
  visible: (dropIndex: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: prefersReducedMotion
      ? { duration: 0.16 }
      : {
          delay: dropIndex * 0.11,
          type: 'spring',
          stiffness: 100,
          damping: 18,
          mass: 0.8,
        },
  }),
});

const blockGridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
  backgroundSize: '1.35rem 1.35rem',
};

const SkillBlockContent = ({ skill }: { skill: Skill }) => (
  <>
    <span className="relative z-10 flex w-full items-center gap-2 whitespace-nowrap text-sm font-black leading-tight">
      <SkillIcon icon={skill.icon} className="h-4 w-4 shrink-0" />
      {skill.name}
    </span>
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-1 rounded-[0.25rem] border border-white/35 bg-white/10 shadow-inner"
    />
  </>
);

const SkillBlock = ({
  skill,
  dropIndex,
  gameDrop = false,
  revealImmediately = false,
}: {
  skill: Skill;
  dropIndex: number;
  gameDrop?: boolean;
  revealImmediately?: boolean;
}) => {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const span = spanClasses[getSkillSpan(skill) - 2];

  return (
    <motion.li
      custom={dropIndex}
      variants={gameDrop ? undefined : getBlockVariants(prefersReducedMotion)}
      initial={
        gameDrop
          ? prefersReducedMotion
            ? { opacity: 0 }
            : { opacity: 0, y: -145, scale: 0.96 }
          : revealImmediately
            ? false
            : 'hidden'
      }
      animate={gameDrop ? { opacity: 1, y: 0, scale: 1 } : 'visible'}
      transition={
        gameDrop
          ? prefersReducedMotion
            ? { duration: 0.08 }
            : { type: 'spring', stiffness: 125, damping: 17, mass: 0.75 }
          : undefined
      }
      layout
      className={`relative flex min-h-[3.25rem] min-w-0 items-center overflow-hidden rounded-[0.35rem] border-2 px-3.5 py-2.5 shadow-lg ring-1 ring-white/45 ${span} ${categoryStyles[skill.category]}`}
      style={blockGridStyle}
    >
      <SkillBlockContent skill={skill} />
    </motion.li>
  );
};

const FallingSkillBlock = ({
  skill,
  isWrong,
}: {
  skill: Skill;
  isWrong: boolean;
}) => {
  const prefersReducedMotion = Boolean(useReducedMotion());
  const span = spanClasses[getSkillSpan(skill) - 2];

  return (
    <motion.li
      layoutId="active-skill-block"
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -24, scale: 0.92 }}
      animate={
        isWrong && !prefersReducedMotion
          ? { opacity: 1, y: 0, scale: 1, x: [0, -9, 8, -6, 5, 0] }
          : { opacity: 1, y: 0, scale: 1, x: 0 }
      }
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 18 }}
      transition={{ duration: prefersReducedMotion ? 0.08 : 0.32 }}
      className={`relative flex min-h-[3.25rem] min-w-0 items-center overflow-hidden rounded-[0.35rem] border-2 border-indigo-200 bg-indigo-100 px-3.5 py-2.5 text-indigo-950 shadow-xl shadow-indigo-500/30 ring-2 ring-white/65 dark:border-cyan-200 dark:bg-cyan-100 dark:text-slate-950 ${span}`}
      style={blockGridStyle}
    >
      <SkillBlockContent skill={skill} />
    </motion.li>
  );
};

type GameMode = 'showcase' | 'playing' | 'complete';
type FeedbackKind = 'correct' | 'wrong';

interface GameFeedback {
  kind: FeedbackKind;
  message: string;
  nonce: number;
}

type GameStacks = Partial<Record<SkillCategory, Skill[]>>;

interface GameState {
  mode: GameMode;
  instantShowcase: boolean;
  currentIndex: number;
  selectedLane: number;
  stacks: GameStacks;
  score: number;
  streak: number;
  mistakes: number;
  feedback: GameFeedback | null;
  feedbackNonce: number;
}

type GameAction =
  | { type: 'START' }
  | { type: 'RESTART' }
  | { type: 'EXIT' }
  | { type: 'MOVE'; delta: -1 | 1 }
  | { type: 'DROP'; laneIndex?: number };

const createEmptyStacks = (): GameStacks =>
  Object.fromEntries(gameLanes.map((category) => [category, []])) as GameStacks;

const createGameState = (mode: GameMode, instantShowcase = false): GameState => ({
  mode,
  instantShowcase,
  currentIndex: 0,
  selectedLane: Math.floor(gameLanes.length / 2),
  stacks: createEmptyStacks(),
  score: 0,
  streak: 0,
  mistakes: 0,
  feedback: null,
  feedbackNonce: 0,
});

const correctMessages = [
  'Clean drop. Zero merge conflicts.',
  'Perfect fit. No hotfix required.',
  'Block shipped. Production remains calm.',
  'Nice stack. The compiler approves.',
];

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'START':
    case 'RESTART':
      return createGameState(gameQueue.length > 0 ? 'playing' : 'complete');
    case 'EXIT':
      return createGameState('showcase', true);
    case 'MOVE': {
      if (state.mode !== 'playing') return state;
      const selectedLane = Math.max(
        0,
        Math.min(gameLanes.length - 1, state.selectedLane + action.delta)
      );
      return { ...state, selectedLane, feedback: null };
    }
    case 'DROP': {
      if (state.mode !== 'playing') return state;

      const skill = gameQueue[state.currentIndex];
      if (!skill) return { ...state, mode: 'complete' };

      const selectedLane = Math.max(
        0,
        Math.min(gameLanes.length - 1, action.laneIndex ?? state.selectedLane)
      );
      const chosenCategory = gameLanes[selectedLane];
      const feedbackNonce = state.feedbackNonce + 1;

      if (chosenCategory !== skill.category) {
        return {
          ...state,
          selectedLane,
          streak: 0,
          mistakes: state.mistakes + 1,
          feedbackNonce,
          feedback: {
            kind: 'wrong',
            message: `Wrong stack — ${skill.name} belongs in ${skill.category}.`,
            nonce: feedbackNonce,
          },
        };
      }

      const currentIndex = state.currentIndex + 1;
      const isComplete = currentIndex >= gameQueue.length;
      const streak = state.streak + 1;
      const score = state.score + 100;

      return {
        ...state,
        mode: isComplete ? 'complete' : 'playing',
        currentIndex,
        selectedLane,
        score,
        streak,
        stacks: {
          ...state.stacks,
          [skill.category]: [...(state.stacks[skill.category] ?? []), skill],
        },
        feedbackNonce,
        feedback: {
          kind: 'correct',
          message: isComplete
            ? `Stack shipped — ${score}/${gameQueue.length * 100} points.`
            : correctMessages[state.currentIndex % correctMessages.length],
          nonce: feedbackNonce,
        },
      };
    }
    default:
      return state;
  }
};

const SkillCategoryGroup = ({
  category,
  skills,
  startIndex,
  gameMode,
  activeSkill,
  placedSkills,
  isSelected,
  feedback,
  feedbackNonce,
  instantShowcase,
  onDrop,
}: {
  category: SkillCategory;
  skills: Skill[];
  startIndex: number;
  gameMode: GameMode;
  activeSkill: Skill | undefined;
  placedSkills: Skill[];
  isSelected: boolean;
  feedback: GameFeedback | null;
  feedbackNonce: number;
  instantShowcase: boolean;
  onDrop: () => void;
}) => {
  const gameVisible = gameMode !== 'showcase';
  const gamePlaying = gameMode === 'playing';
  const visibleSkills = gameVisible ? placedSkills : skills;
  const gameTotal = gameQueue.filter((skill) => skill.category === category).length;
  const isWrong = isSelected && feedback?.kind === 'wrong';

  const handleLaneKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!gamePlaying || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    event.stopPropagation();
    onDrop();
  };

  return (
    <motion.article
      role={gamePlaying ? 'button' : undefined}
      tabIndex={gamePlaying ? 0 : undefined}
      aria-pressed={gamePlaying ? isSelected : undefined}
      aria-label={
        gamePlaying && activeSkill
          ? `Drop ${activeSkill.name} into ${category}`
          : undefined
      }
      onClick={gamePlaying ? onDrop : undefined}
      onKeyDown={handleLaneKeyDown}
      animate={
        isWrong
          ? { x: [0, -4, 4, -3, 3, 0] }
          : { x: 0 }
      }
      transition={{ duration: 0.3 }}
      className={`relative flex h-full flex-col overflow-hidden rounded-xl border bg-white/65 p-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-[border-color,box-shadow] dark:bg-white/[0.04] ${
        isWrong
          ? 'border-rose-400 ring-2 ring-rose-400/40 dark:border-rose-400'
          : isSelected && gamePlaying
            ? 'border-cyan-400 ring-2 ring-cyan-400/35 dark:border-cyan-300'
            : 'border-slate-200/80 dark:border-white/10'
      } ${gamePlaying ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:focus-visible:ring-cyan-300' : ''}`}
    >
      <div className="bg-grid absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mb-3 flex items-center justify-between gap-3">
        <h3 className="font-display text-base font-bold text-slate-900 dark:text-white">
          {category}
        </h3>
        <div className="flex items-center gap-1.5">
          {isSelected && gamePlaying && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-mono text-[9px] font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-300"
            >
              selected
            </motion.span>
          )}
          <span
            className={`rounded-md px-2 py-1 text-xs font-black ${categoryAccents[category]}`}
          >
            {gameVisible ? `${placedSkills.length}/${gameTotal}` : skills.length}
          </span>
        </div>
      </div>

      <div
        className={`relative flex flex-1 flex-col justify-end overflow-hidden rounded-lg border border-slate-900/10 bg-slate-950/[0.03] p-2 dark:border-white/10 dark:bg-night/30 ${
          gameVisible ? 'min-h-[11rem] sm:min-h-[13rem] 2xl:min-h-[25rem]' : 'min-h-[12rem]'
        }`}
      >
        <AnimatePresence mode="popLayout">
          {gamePlaying && activeSkill && isSelected && (
            <motion.ul
              key={`${activeSkill.category}:${activeSkill.name}`}
              layout
              className="absolute inset-x-2 top-2 z-20 grid grid-cols-4 gap-1.5"
              aria-label={`Current block: ${activeSkill.name}`}
            >
              <FallingSkillBlock
                key={`${activeSkill.category}:${activeSkill.name}:${feedbackNonce}`}
                skill={activeSkill}
                isWrong={isWrong}
              />
            </motion.ul>
          )}
        </AnimatePresence>

        {gameVisible && visibleSkills.length === 0 && (
          <p className="pointer-events-none absolute inset-x-3 bottom-5 text-center font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400/75 dark:text-slate-600">
            {isSelected && gamePlaying ? 'Drop here' : 'Empty lane'}
          </p>
        )}

        <motion.ul layout className="relative z-10 grid grid-cols-4 gap-1.5">
          {visibleSkills.map((skill, index) => (
            <SkillBlock
              key={`${skill.category}:${skill.name}`}
              skill={skill}
              dropIndex={gameVisible ? index : startIndex + index}
              gameDrop={gameVisible}
              revealImmediately={!gameVisible && instantShowcase}
            />
          ))}
        </motion.ul>
        <div
          aria-hidden="true"
          className="relative z-10 mt-2 h-1 rounded-full bg-slate-900/15 dark:bg-white/15"
        />
      </div>
    </motion.article>
  );
};

const TechStack = () => {
  const [game, dispatch] = useReducer(gameReducer, undefined, () =>
    createGameState('showcase')
  );
  const gameBoardRef = useRef<HTMLDivElement>(null);
  const currentSkill = gameQueue[game.currentIndex];
  const placedCount = Math.min(game.currentIndex, gameQueue.length);

  useEffect(() => {
    if (game.mode !== 'playing') return;
    const frame = window.requestAnimationFrame(() => gameBoardRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [game.mode]);

  const handleGameKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (game.mode !== 'playing') return;

    const target = event.target as HTMLElement;
    if (target.closest('button, a, input, textarea, select, [contenteditable="true"]')) {
      return;
    }

    const key = event.key.toLowerCase();

    if (event.key === 'ArrowLeft' || key === 'a') {
      event.preventDefault();
      dispatch({ type: 'MOVE', delta: -1 });
    } else if (event.key === 'ArrowRight' || key === 'd') {
      event.preventDefault();
      dispatch({ type: 'MOVE', delta: 1 });
    } else if (event.key === 'ArrowDown' || event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      dispatch({ type: 'DROP' });
    } else if (key === 'r') {
      event.preventDefault();
      dispatch({ type: 'RESTART' });
    } else if (event.key === 'Escape') {
      event.preventDefault();
      dispatch({ type: 'EXIT' });
    }
  };

  const statusMessage =
    game.feedback?.message ??
    (currentSkill
      ? `Move ${currentSkill.name} to its category, then drop it.`
      : 'Stack complete.');

  return (
    <section
      id="tech-stack"
      className="section-container min-h-[calc(100svh-4rem)] scroll-mt-24 py-10 lg:py-8"
    >
      <SectionHeading
        eyebrow="Daily drivers"
        title="Tech Stack and Skills"
        subtitle="A Tetris-inspired skill stack with an optional sorting game."
      />

      <motion.div
        layout
        className="relative mb-4 overflow-hidden rounded-xl border border-slate-200/80 bg-white/65 p-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]"
      >
        <div className="relative flex flex-wrap items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-cyan-300/10 dark:text-cyan-300">
              <Gamepad2 size={20} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-sm font-black text-slate-900 dark:text-white">
                Skill Drop
              </p>
              <p className="truncate text-xs font-medium text-slate-500 dark:text-slate-400">
                {game.mode === 'showcase'
                  ? 'Sort 10 skill blocks into the correct lanes.'
                  : game.mode === 'complete'
                    ? `Stack shipped with ${game.mistakes} ${game.mistakes === 1 ? 'miss' : 'misses'}.`
                    : `Current block: ${currentSkill?.name ?? 'Loading...'}`}
              </p>
            </div>
          </div>

          {game.mode === 'showcase' ? (
            <button
              type="button"
              onClick={() => dispatch({ type: 'START' })}
              disabled={gameQueue.length === 0}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-black text-white shadow-lg shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-cyan-300 dark:text-slate-950 dark:hover:bg-cyan-200"
            >
              <Play size={14} fill="currentColor" aria-hidden="true" />
              Play game
            </button>
          ) : (
            <div className="flex flex-wrap items-center justify-end gap-2">
              <span className="rounded-lg border border-slate-200/80 bg-white/70 px-2.5 py-1.5 text-[11px] font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                Score <strong className="text-slate-950 dark:text-white">{game.score}</strong>
              </span>
              <span className="rounded-lg border border-slate-200/80 bg-white/70 px-2.5 py-1.5 text-[11px] font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                Streak <strong className="text-slate-950 dark:text-white">{game.streak}</strong>
              </span>
              <span className="rounded-lg border border-slate-200/80 bg-white/70 px-2.5 py-1.5 text-[11px] font-bold text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300">
                {placedCount}/{gameQueue.length}
              </span>
              <button
                type="button"
                onClick={() => dispatch({ type: 'RESTART' })}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 px-2.5 py-1.5 text-[11px] font-black text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200"
              >
                <RefreshCw size={13} aria-hidden="true" />
                {game.mode === 'complete' ? 'Play again' : 'Reset'}
              </button>
              <button
                type="button"
                onClick={() => dispatch({ type: 'EXIT' })}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 px-2.5 py-1.5 text-[11px] font-black text-slate-600 transition-colors hover:border-rose-300 hover:text-rose-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-rose-300/40 dark:hover:text-rose-300"
              >
                <LogOut size={13} aria-hidden="true" />
                Show all
              </button>
            </div>
          )}
        </div>

        {game.mode !== 'showcase' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="relative mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 pt-3 dark:border-white/10"
          >
            <div
              role="status"
              aria-live="polite"
              className={`flex min-w-0 items-center gap-2 text-xs font-bold ${
                game.feedback?.kind === 'wrong'
                  ? 'text-rose-600 dark:text-rose-300'
                  : game.mode === 'complete' || game.feedback?.kind === 'correct'
                    ? 'text-emerald-600 dark:text-emerald-300'
                    : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {game.mode === 'complete' && <Trophy size={15} aria-hidden="true" />}
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={`${game.feedback?.nonce ?? 0}:${statusMessage}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                >
                  {statusMessage}
                </motion.span>
              </AnimatePresence>
            </div>

            {game.mode === 'playing' && (
              <div className="flex items-center gap-1.5" aria-label="Game controls">
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'MOVE', delta: -1 })}
                  disabled={game.selectedLane === 0}
                  aria-label="Move block left"
                  className="flex h-8 items-center gap-1 rounded-lg border border-slate-200/80 px-2.5 text-[10px] font-black uppercase tracking-wide text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-35 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200"
                >
                  <ArrowLeft size={13} aria-hidden="true" />
                  <span className="hidden sm:inline">Left</span>
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'DROP' })}
                  className="flex h-8 items-center gap-1 rounded-lg bg-slate-950 px-3 text-[10px] font-black uppercase tracking-wide text-white transition-colors hover:bg-indigo-600 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200"
                >
                  <ArrowDown size={13} aria-hidden="true" />
                  Drop
                </button>
                <button
                  type="button"
                  onClick={() => dispatch({ type: 'MOVE', delta: 1 })}
                  disabled={game.selectedLane === gameLanes.length - 1}
                  aria-label="Move block right"
                  className="flex h-8 items-center gap-1 rounded-lg border border-slate-200/80 px-2.5 text-[10px] font-black uppercase tracking-wide text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600 disabled:opacity-35 dark:border-white/10 dark:text-slate-300 dark:hover:border-cyan-300/40 dark:hover:text-cyan-200"
                >
                  <span className="hidden sm:inline">Right</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </button>
              </div>
            )}
          </motion.div>
        )}

        {game.mode !== 'showcase' && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-0.5 bg-slate-200/80 dark:bg-white/10"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400"
              animate={{ width: `${(placedCount / Math.max(1, gameQueue.length)) * 100}%` }}
              transition={{ type: 'spring', stiffness: 180, damping: 24 }}
            />
          </div>
        )}
      </motion.div>

      <LayoutGroup id="skill-drop-game">
        <motion.div
          ref={gameBoardRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          tabIndex={game.mode === 'playing' ? 0 : -1}
          onKeyDown={handleGameKeyDown}
          aria-label={
            game.mode === 'playing'
              ? 'Skill Drop game board. Use left and right arrows to choose a lane, then down arrow, Enter, or Space to drop.'
              : undefined
          }
          className="grid gap-4 outline-none md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7"
        >
          {groupedSkills.map(({ category, skills }, groupIndex) => {
            const startIndex = groupedSkills
              .slice(0, groupIndex)
              .reduce((total, group) => total + group.skills.length, 0);

            return (
              <SkillCategoryGroup
                key={category}
                category={category}
                skills={skills}
                startIndex={startIndex}
                gameMode={game.mode}
                activeSkill={currentSkill}
                placedSkills={game.stacks[category] ?? []}
                isSelected={game.selectedLane === groupIndex}
                feedback={game.feedback}
                feedbackNonce={game.feedbackNonce}
                instantShowcase={game.instantShowcase}
                onDrop={() => dispatch({ type: 'DROP', laneIndex: groupIndex })}
              />
            );
          })}
        </motion.div>
      </LayoutGroup>
    </section>
  );
};

export default TechStack;
