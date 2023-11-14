export default function PageHeader({ title, text }) {
  return (
    <div className="space-y-6 my-28">
      <div className="mb-20 text-center">
        <h1 className="mb-6 text-5xl">{title}</h1>
        <small className="font-semibold w-[60%] block leading-6 mx-auto">
          {text ?? (
            <h1 className="text-sm leading-loose">
              Lorem ipsum dolor sit amet, consectetur cing elit. Suspe ndisse
              suscipit sagittis leo sit met condimentum estibulum is Suspe
              ndisse suscipit sagittis leo sit met condimentum estibulorem ipsum
              dolor sit amet, consectetur cing elit.
            </h1>
          )}
        </small>
      </div>
    </div>
  );
}
