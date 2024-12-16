export default function SubmitBtn({ className, text, img, loading = false }) {
  return (
    <button
      className={`form_submit ${className}`}
      disabled={loading}
      type="submit"
      style={{ opacity: loading ? 0.7 : 1 }}
    >
      {loading ? (
        <i className="fa-duotone fa-regular fa-circle-notch fa-spin"></i>
      ) : (
        <>
          {img && <img src={img} alt={text} />}
          {text}
        </>
      )}
    </button>
  );
}
