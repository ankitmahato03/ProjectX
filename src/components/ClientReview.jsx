import itemsData from "../data/ourClientReview.json";
import { cn } from "../utils/cn";
import Marquee from "./ui/marquee";
import PropTypes from "prop-types";

const reviews = itemsData.clientReview;

export default function ClientReview() {
  return (
    <div
      id="ClientReview"
      className="bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 p-10 h-full"
    >
      <div className="text-center mb-10 border-4 border-black dark:border-gray-700 rounded-xl py-10 max-w-xl mx-auto">
        <p className="text-3xl font-bold mb-2">
          “Keep it simple, stupid (KISS)”
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          KISS-Prinzip von Ockhams Rasiermesser
        </p>
        <button className="mt-4 px-6 py-2 bg-slate-800 rounded-full text-white hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors">
          Contact Us
        </button>
      </div>
      <hr className="border-t shadow-xl border-gray-600 my-10" />
      <div className="text-center">
        <h1 className="text-xl font-bold mb-3">Customer Reflections</h1>
        <h1 className="text-base">
          Learn what our customers appreciate about our service.
        </h1>
        <div className="relative flex h-[380px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
          <Marquee pauseOnHover className="[--duration:20s]">
            {reviews.map((item) => (
              <ReviewCard key={item.id} {...item} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
        </div>
      </div>
    </div>
  );
}

const ReviewCard = ({ name, review, image }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={image}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{review}</blockquote>
    </figure>
  );
};

// PropTypes validation
ReviewCard.propTypes = {
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
