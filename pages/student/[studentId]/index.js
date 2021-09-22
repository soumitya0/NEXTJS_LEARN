import { useRouter } from "next/router";

const StudentDetails = () => {
  const router = useRouter();

  const sid = router.query.studentId;
  return (
    <>
      <h1>STUDENT NO</h1>
      <p>{sid}</p>
    </>
  );
};
export default StudentDetails;
