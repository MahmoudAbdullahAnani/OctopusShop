import { useRouter } from "next/router";
import RecipeReviewCard from "../../components/ProdauctSingle";


const singleProdect = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const routId = router.query.prodect;
  return (
    <>
      <RecipeReviewCard routId={routId} />
    </>
  );
};

export default singleProdect;
