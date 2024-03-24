import Breadcrumbs from '@/app/components/Breadcrumbs/Breadcrumbs';
import React from 'react';

const TermsServices = () => {
  return (
    <>
      <Breadcrumbs title="Terms of Services" name="Terms and Service" />
      <div className="container mx-auto px-4 py-8">
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Terms of Use</h2>
          <p className="text-gray-700 text-sm">
            Your use of this site is expressly conditioned on your acceptance of
            these Terms of Use. If you do not agree with any part of the Terms
            of Use, you must not use this site. USA Underwriters reserves the
            right to modify the Terms of Use at any time. Continued use of this
            site by you will constitute your acceptance of any revisions to the
            Terms of Use. Please check this page regularly.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">
            All information and other materials present on the site
          </h2>
          <p className="text-gray-700 text-sm">
            All information and other materials present on the site (“content”),
            including, without limitation, products and services are provided on
            an as is basis. USA Underwriters does not warrant or make any
            representations regarding the use or the result of the use of the
            materials on this website in terms of their correctness, accuracy,
            reliability, or otherwise. The information and descriptions
            contained herein are not necessarily intended to be complete
            descriptions of all terms, exclusions, and conditions applicable to
            the products and services, but are provided solely for general
            informational purposes. To the extent permitted by law, USA
            Underwriters disclaims all warranties, express or implied,
            including, but not limited to, implied warranties of merchantability
            and fitness for a particular purpose, title, non-infringement,
            security, or accuracy with regard to any website owned by a third
            party to which or from which the site is linked.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">
            USA underwriters may change the programs
          </h2>
          <p className="text-gray-700 text-sm">
            USA Underwriters may change the programs or products mentioned at
            any time without notice. Additionally, all insurance products
            referred to on this website are subject to availability and
            qualifications. Product terms, conditions, and exclusions not
            described on this website may apply.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Limitation of liability</h2>
          <p className="text-gray-700 text-sm">
            Limitation of Liability: To the extent permitted by law, USA
            Underwriters disclaims liability, whether based in contract, tort,
            negligence, strict liability, or otherwise, for damages of any kind
            (including, but not limited to, direct, indirect, incidental,
            consequential, special, punitive, or exemplary damages) in any way
            arising from the functionality or operation of this website
            (including, but not limited to, damages arising from interruptions
            of service or delay in operation or transmission), even if USA
            Underwriters is expressly advised of the possibility of such
            damages.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">
            What information do we collect?
          </h2>
          <p className="text-gray-700 text-sm">
            We collect personally identifiable information to identify and
            register you as a USA Underwriters customer. In addition, we collect
            personal, financial, and product information to provide you with
            services tailored to your particular needs. By learning a little
            about you, USA Underwriters can deliver more relevant content and
            product offerings and thus offer you better services.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsServices;
