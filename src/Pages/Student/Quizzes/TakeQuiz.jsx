// export default TakeQuiz;
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quiz } from "../../../Logic/Student/Data";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import Avatar from "@mui/material/Avatar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  FormControlLabel,
  Radio, // Divider,
  // Typography,
  Button,
  // Box,
  // Radio,
  // RadioGroup,
  // FormControlLabel,
  // Paper,
  // Chip,
} from "@mui/material";

const TakeQuiz = () => {
  // Route parameters
  const { courseId, quizId } = useParams();
  const navigate = useNavigate();

  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quiz.duration * 60); // Quiz duration in seconds

  // important: first of all you have to call route: api/StudentAnswer/get-saved-score
  // and check if it returns a value (which means the student took the quiz already).
  // If a student result exist or score exists, navigate to:
  // navigate(`/course-details/${courseId}/quizzes/view-results/${quizId}`);
  // Example:
  // const score = 5;
  // if (score !== null) {
  //   navigate(`/course-details/${courseId}/quizzes/view-results/${quizId}`);
  // }

  // Handle quiz submission
  const handleSubmit = () => {
    //1. call route: api/StudentAnswer/post-quiz-result using the following data
    const quizResult = {
      quizId: quizId,
      studentAnswers: answers,
    };
    console.log("this is the quiz result", quizResult);
    //2. then call route: api/StudentAnswer/calculate-score
    //3. then navigate to the result page
    navigate(`/course-details/${courseId}/quizzes/view-results/${quizId}`);
  };

  // Timer Effect
  useEffect(() => {
    if (timeLeft <= 0 || isSubmitted) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  // Handle option selection
  const handleOptionChange = (questionId, optionIndex) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  // Navigate between questions
  const handleNavigateQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  // Derive quiz details
  const currentQuestion = quiz.questions.$values[currentQuestionIndex];
  const totalQuestions = quiz.questions.$values.length;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  //   <>
  //     {/* layout */}
  //     <div className="flex flex-col justify-between !p-8 ">
  //       <div className="container space-y-6 !mx-auto">
  //         <div id="header" className="flex justify-between">
  //           <Typography className="!font-bold !text-2xl !text-neutral-textPrimary">
  //             {quiz.title}
  //           </Typography>
  //           <div className="!flex !justify-end">
  //             <Chip
  //               icon={<AccessTimeIcon className="!text-neutral-textMedium" />}
  //               label={` ${minutes}:${seconds.toString().padStart(2, "0")}`}
  //               // color={timeLeft <= 60 ? "error" : "error"}
  //               className={`!text-base font-bold !bg-white  ${timeLeft <= 60 ? " !text-accent-error" : "!text-neutral-textMedium"}`}
  //             />
  //           </div>
  //         </div>

  //         <Divider className="!my-4" />

  //         <div className="space-y-5 flex justify-between gap-5">
  //           <div id="questionNavigator" className="!w-1/4 ">
  //             <Paper className="p-6 !min-h-80">
  //               <Typography className="!text-xl !font-semibold ">
  //                 Questions
  //               </Typography>
  //               <div className="flex flex-wrap gap-2 mt-6">
  //                 {quiz.questions.$values.map((_, index) => (
  //                   <Avatar
  //                     variant="rounded"
  //                     key={index}
  //                     onClick={() => handleNavigateQuestion(index)}
  //                     className={`${
  //                       currentQuestionIndex === index
  //                         ? "!bg-primary !text-white"
  //                         : "!bg-neutral-background  !text-neutral-textSecondary"
  //                       // : "!border-primary !border-2 !text-primary !bg-white"
  //                     }`}
  //                   >
  //                     {index + 1}
  //                   </Avatar>
  //                 ))}
  //               </div>
  //             </Paper>
  //           </div>

  //           <div id="currentQuestion" className="!w-3/4 !m-0">
  //             <div className="">
  //               <div id="questions ">
  //                 <Paper className="p-6 !min-h-80 ">
  //                   <Typography className="!text-xl !font-semibold !mb-6">
  //                     Question {currentQuestionIndex + 1} of {totalQuestions}
  //                   </Typography>
  //                   <Typography className="!text-neutral-textPrimary !text-xl !mb-2 ">
  //                     {currentQuestion.text}
  //                   </Typography>
  //                   <RadioGroup
  //                     value={answers[currentQuestion.questionId] ?? ""}
  //                     onChange={(e) =>
  //                       handleOptionChange(
  //                         currentQuestion.questionId,
  //                         parseInt(e.target.value, 10)
  //                       )
  //                     }
  //                   >
  //                     {currentQuestion.answerOptions.$values.map((option) => (
  //                       <FormControlLabel
  //                         key={option.answerOptionId}
  //                         value={option.answerOptionId}
  //                         control={<Radio />}
  //                         label={option.text}
  //                         className="!text-neutral-textPrimary "
  //                       />
  //                     ))}
  //                   </RadioGroup>
  //                 </Paper>
  //               </div>
  //               <div id="buttons">
  //                 <div className="flex justify-between mt-4">
  //                   <Button
  //                     variant="text"
  //                     onClick={() =>
  //                       setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
  //                     }
  //                     disabled={currentQuestionIndex === 0}
  //                     className="!text-base"
  //                     startIcon={<ArrowBackIosIcon />}
  //                   >
  //                     Previous
  //                   </Button>
  //                   {currentQuestionIndex < totalQuestions - 1 ? (
  //                     <Button
  //                       variant="text"
  //                       onClick={() =>
  //                         setCurrentQuestionIndex((prev) =>
  //                           Math.min(totalQuestions - 1, prev + 1)
  //                         )
  //                       }
  //                       disabled={
  //                         answers[currentQuestion.questionId] === undefined
  //                       }
  //                       className="!text-base"
  //                       endIcon={<ArrowForwardIosIcon />}
  //                     >
  //                       Next
  //                     </Button>
  //                   ) : (
  //                     <Button
  //                       variant="contained"
  //                       color="primary"
  //                       onClick={() => setIsSubmitted(true)}
  //                       disabled={
  //                         Object.keys(answers).length !== totalQuestions
  //                       }
  //                       className=" !text-white !text-base"
  //                     >
  //                       Submit
  //                     </Button>
  //                   )}
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         <Divider className="!my-4" />
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <div className="min-h-screen flex flex-col bg-neutral-background text-neutral-textPrimary font-poppins">
      {/* Header Section */}
      <header className="bg-neutral-surface shadow py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-neutral-textPrimary">
            {quiz.title}
          </h1>
          <div className="flex items-center space-x-2">
            <AccessTimeIcon className="text-neutral-textSecondary" />
            <span
              className={`font-semibold ${
                timeLeft <= 60
                  ? "text-accent-warning"
                  : "text-neutral-textMedium"
              }`}
            >
              {minutes}:{seconds.toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex-1 px-6 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Question Navigator */}
          <aside className="col-span-1 bg-neutral-surface rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Questions</h2>
            <div className="grid grid-cols-5 gap-8">
              {quiz.questions.$values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigateQuestion(index)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium  ${
                    currentQuestionIndex === index
                      ? "bg-primary text-neutral-surface"
                      : "bg-neutral-background text-neutral-textPrimary hover:bg-orange-100"
                  }`}
                  aria-label={`Go to question ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </aside>

          {/* Current Question */}
          <section className="col-span-3 bg-neutral-surface rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </h2>
            <p className="!text-lg !mb-6">{currentQuestion.text}</p>
            <form>
              <div className="space-y-4">
                {currentQuestion.answerOptions.$values.map((option) => (
                  <FormControlLabel
                    key={option.answerOptionId}
                    control={
                      <Radio
                        value={option.answerOptionId}
                        checked={
                          answers[currentQuestion.questionId] ===
                          option.answerOptionId
                        }
                        onChange={() =>
                          handleOptionChange(
                            currentQuestion.questionId,
                            option.answerOptionId
                          )
                        }
                        color="primary"
                      />
                    }
                    label={<h1 className="!text-lg">{option.text}</h1>}
                    className="!flex !items-center space-x-3  cursor-pointer"
                  />
                ))}
              </div>
            </form>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {/* Previous Button */}
              <Button
                variant="text"
                onClick={() =>
                  setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                }
                disabled={currentQuestionIndex === 0}
                startIcon={<ArrowBackIosIcon />}
                className=" !text-primary-dark !text-base disabled:opacity-50"
              >
                Previous
              </Button>

              {/* Next Button */}
              {currentQuestionIndex < totalQuestions - 1 ? (
                <Button
                  endIcon={<ArrowForwardIosIcon />}
                  variant="text"
                  onClick={() =>
                    setCurrentQuestionIndex((prev) =>
                      Math.min(totalQuestions - 1, prev + 1)
                    )
                  }
                  disabled={answers[currentQuestion.questionId] === undefined}
                  className=" !text-primary-dark !text-base disabled:opacity-50"
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setIsSubmitted(true)}
                  disabled={Object.keys(answers).length !== totalQuestions}
                >
                  Submit
                </Button>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
export default TakeQuiz;
