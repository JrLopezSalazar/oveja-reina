


const ProductCard = () => {
  return (
    <article className="grid gap-5 grid-cols-2 sm:grid-cols-[repeat(auto-fit,_260px)] max-w-[1300px]  rounded-md mt-4 mx-auto items-center justify-center">
     
        <div>
         <section className="grid max-w-[300px] ">
          <img className="rounded-t-md" src="/images/Beverly.jpg" alt="" />
        </section>
        <section>
          <h2 className="text-lg font-bold">Nombre Producto</h2>
          <p>Breve descripcion de producto</p>
          <h4>Precio $40</h4>
        </section>
       </div>
        <div>
         <section className="grid max-w-[300px]">
          <img className="rounded-t-md" src="/images/Beverly.jpg" alt="" />
        </section>
        <section>
          <h2 className="text-lg font-bold">Nombre Producto</h2>
          <p>Breve descripcion de producto</p>
          <h4>Precio $40</h4>
        </section>
       </div>
        <div>
         <section className="grid max-w-[300px]">
          <img className="rounded-t-md" src="/images/Beverly.jpg" alt="" />
        </section>
        <section>
          <h2 className="text-lg font-bold">Nombre Producto</h2>
          <p>Breve descripcion de producto</p>
          <h4>Precio $40</h4>
        </section>
       </div>
        <div>
         <section className="grid max-w-[300px]">
          <img className="rounded-t-md" src="/images/Beverly.jpg" alt="" />
        </section>
        <section>
          <h2 className="text-lg font-bold">Nombre Producto</h2>
          <p>Breve descripcion de producto</p>
          <h4>Precio $40</h4>
        </section>
       </div>
      
      
      
    </article>
  );
};

export default ProductCard;
