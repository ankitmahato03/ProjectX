import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto mt-4">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">
          Terms & Conditions
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Please read these terms and conditions carefully before using our service.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h3 className="text-xl font-semibold text-gray-900">
              1. Introduction
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">
              2. User Responsibilities
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
              deserunt mollit anim id est laborum.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">
              3. Limitation of Liability
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              architecto beatae vitae dicta sunt explicabo.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">
              4. Governing Law
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900">
              5. Changes to Terms
            </h3>
            <p className="mt-4 text-base text-gray-600">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium 
              voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati 
              cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id 
              est laborum et dolorum fuga.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Last updated: September 1, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
