const AboutPage = () => {
  return (
    <div className="min-h-[80vh] container mx-auto max-w-[750px] mt-8">
      <div className="mb-5">
        <h1 className="text-3xl font-bold mb-2">Welcome to Career Nest</h1>
        <p style={{ lineHeight: "28px" }}>
          Welcome to Career Nest, your trusted partner in the journey to find
          the perfect job or the ideal candidate. Career Nest is dedicated to
          bridging the gap between employers and job seekers, making the
          recruitment process smoother, faster, and more efficient.
        </p>
      </div>
      <div className="mb-5">
        <h1 className="text-3xl font-bold mb-2">Our Mission</h1>
        <p style={{ lineHeight: "28px" }}>
          At Career Nest, our mission is to connect talented individuals with
          great companies. We strive to create a user-friendly platform that
          simplifies the job search and hiring process, ensuring that employers
          find the right talent and job seekers find opportunities that match
          their skills and career aspirations.{" "}
        </p>
      </div>
      <div className="mb-5">
        <h1 className="text-3xl font-bold mb-2">What We Offer</h1>
        <p style={{ lineHeight: "28px" }} className="mb-2">
          For Employers: Whether you are a small business or a large
          corporation, our platform offers you a range of tools to post jobs,
          manage applications, and find the perfect candidates. Our job posting
          packages are designed to fit your needs and budget, with options for
          featured placements and social media promotions to increase
          visibility.
        </p>
        <p style={{ lineHeight: "28px" }}>
          For Job Seekers: We provide a comprehensive job search experience,
          offering access to thousands of job listings from top employers across
          various industries. Our advanced search filters, job alerts, and
          career resources help you find jobs that match your skills and
          preferences.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
