import { useParams } from "react-router-dom";

function ItemPage() {
	const { category } = useParams();

	return (
		<section className="ItemPage">
			Item Page { category }
		</section>
	)
}

export default ItemPage;