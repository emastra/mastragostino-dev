import React from 'react';
import Button from './Button';

interface BasicCardProps {
  children: React.ReactNode;
}

const BasicCard: React.FC<BasicCardProps> = ({ children }) => {
  return (
    <div className="font-sans">
      {/* rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 shadow-lg  */}
      <div className="text-black w-full rounded-xl border border-zinc-200 bg-white p-6 shadow-lg dark:border-zinc-700 dark:bg-[#202020] dark:text-white md:px-12 md:py-8">
        {children}
      </div>
    </div>
  );
};

export default BasicCard;

{
  /* <Button
            variant="default"
            type="submit"
            onClick={(e) => e.preventDefault()}
            className="bg-black dark:text-black w-full rounded-md py-2 font-medium text-white transition hover:bg-gray-900 dark:bg-white dark:hover:bg-gray-200"
          >
            Login
          </Button>

          <Button
            variant="outline"
            onClick={(e) => e.preventDefault()}
            iconLeft={<GoogleIcon />}
            className="w-full rounded-md border border-gray-200 py-2 text-gray-700 transition hover:bg-gray-50 dark:border-zinc-600 dark:text-white dark:hover:bg-[#232323]"
          >
            Continue with Google
          </Button> */
}
