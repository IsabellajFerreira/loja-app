export default function ProdutoSlug({params}) {
    return (
      <div>
        <h1>Produto slug</h1>
        <p>Slug: {params.slug}</p>
      </div>
    );
}