const FaqPage = () => {
  return (
    <div className="min-h-[80vh] max-w-4xl mx-auto m-2 container mt-8">
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          How do I post a job on your website?
        </div>
        <div className="collapse-content">
          <p className="mb-2">
            To post a job on our website, follow these steps:
          </p>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              Sign Up/Login: Create an account or log in to your existing
              account.
            </li>
            <li className="mb-2">
              Create a Job Post: Navigate to the &quot;Post a Job&quot; section
              in dashboard and fill out the job posting form with details such
              as job title, company name, location, job type, description,
              responsibilities, qualifications, salary, and application process.
            </li>
            <li className="mb-2">
              Submit for Review: Once you&apos;ve filled out the form, submit
              your job posting for review. Our team will review it for
              completeness and compliance with our guidelines.
            </li>
            <li className="mb-2">
              Publish: After approval, your job posting will go live on our
              website, and job seekers can start applying.
            </li>
          </ol>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          How much does it cost to post a job?
        </div>
        <div className="collapse-content">
          <p>
            The cost of posting a job on our website varies based on the package
            you choose. We offer several options:
          </p>
          <p className="font-semibold my-5">Costing Options:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              Basic Package: $50 per job post for a 30-day listing.
            </li>
            <li className="mb-2">
              Standard Package: $100 per job post for a 60-day listing,
              including featured placement.
            </li>
            <li className="mb-2">
              Premium Package: $150 per job post for a 90-day listing, including
              featured placement and social media promotion.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200 mb-4">
        <input type="checkbox" className="peer" />
        <div className="collapse-title text-xl font-medium">
          How can I manage and edit my job postings?
        </div>
        <div className="collapse-content">
          <p className="my-5">
            To manage and edit your job postings, follow these steps:
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-2">Login: Log in to your account.</li>
            <li className="mb-2">
              Dashboard: Navigate to your account dashboard where you will see a
              list of all your active job postings.{" "}
            </li>
            <li className="mb-2">
              Edit Post: Click on the job title you wish to edit. Make the
              necessary changes in the job posting form and save your updates.
            </li>
          </ul>
          <p className="font-semibold my-5">How to Return:</p>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              Fill out the return form included with your order.
            </li>
            <li className="mb-2">
              Pack the shoes securely in the original packaging.
            </li>
            <li className="mb-2">
              Send the package to: 123 Shoe Lane, Fashion City, FC 12345.
            </li>
          </ol>
          <p className="font-semibold my-5">Exchange Policy:</p>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              Exchanges are subject to stock availability.
            </li>
            <li className="mb-2">
              Contact customer service to initiate an exchange.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
