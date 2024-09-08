import Spinner from "@/app/_components/Spinner";

export default function Loading() {
    return <Spinner />;
}

/**
 * Loading file works on a global level.
 * For Next.js we have to create a file called "loading.js" on the application level folder
 * and it will automatically be applied to all pages we have
 * 
 * example: This page will show when there is a loading state in any of this 20 components in the page
 * if only 1 component is fetching and 19 of the rest has finish loading, this page will still be there and show until the fetch is completed
 * Therefore there will be a more granular approach for this kind of scenarios
 * We can use Suspends
 */