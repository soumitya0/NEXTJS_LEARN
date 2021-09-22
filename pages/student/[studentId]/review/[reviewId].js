import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();

  const rid = router.query.reviewId;

  const sid = router.query.studentId;
  return (
    <>
      <h4> STUDENT ID: {sid}</h4>

      <h4> REVIEW ID: {rid}</h4>
    </>
  );
};
export default Review;
