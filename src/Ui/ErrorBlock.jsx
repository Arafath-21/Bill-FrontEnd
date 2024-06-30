function ErrorBlock({errors}) {
  return (
    <>
      {errors?.email?.message && (
        <p className="mb-1  rounded-lg bg-red-100 p-1 text-red-500">
          {errors.email.message}
        </p>
      )}
    </>
  );
}

export default ErrorBlock;
