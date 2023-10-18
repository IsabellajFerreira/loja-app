export default function ProdutoSlug({params}) {
    return (
      <div>
        <h1>Produto ID</h1>
        <p>Slug: {params.slug}</p>
      </div>
    );
}