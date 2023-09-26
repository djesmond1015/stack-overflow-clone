import { UserButton } from '@clerk/nextjs';

const AskQuestionPage = () => {
  return (
    <div>
      Ask question
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default AskQuestionPage;
