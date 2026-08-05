"use client";
interface ErrorProps {
  error: Error;
  reset: () => void;
}
const ErrorMessage = ({ error, reset }: ErrorProps) => {
  return (
    <>
      <p>Could not fetch the list of notes. {error.message}</p>
      <button onClick={reset}>Retry</button>
    </>
  );
};
export default ErrorMessage;
