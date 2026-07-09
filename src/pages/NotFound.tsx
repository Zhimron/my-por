import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="section-container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <title>Page not found | Shimron M. Guray</title>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="font-display text-7xl font-bold gradient-text"
      >
        404
      </motion.p>
      <h1 className="mt-4 font-display text-2xl font-semibold text-slate-900 dark:text-white">
        Page not found
      </h1>
      <p className="mt-2 max-w-md text-slate-600 dark:text-slate-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft size={16} aria-hidden="true" />
        Back home
      </Link>
    </div>
  );
};

export default NotFound;
