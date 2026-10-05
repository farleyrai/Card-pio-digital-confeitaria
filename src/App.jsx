import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Cake,
  Check,
  Heart,
  Leaf,
  Menu,
  Minus,
  Moon,
  Plus,
  ShoppingBag,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const CORES = {
  coral: "#FA4C2B",
  coralClaro: "#FA5A3D",
  azul: "#167F85",
  azulEscuro: "#176B70",
  azulClaro: "#E8F4F3",
  creme: "#fbe9d6",
  bege: "#F7F0EA",
  borda: "#B7DADC",
};

const images = {
  chocolate:
    "/bolo1.jpeg",
  carrot:
    "/bolo2.jpeg",
  berry:
    "/bolo3.jpeg",
  redVelvet:
    "/bolo5.jpeg",
  prestigio:
    "/bolo6.jpeg",
  burger:
    "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  brownie:
    "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=85",
};

const products = [
  {
    id: 1,
    name: "Bolo de Chocolate",
    category: "Bolos",
    price: 35.9,
    image: images.chocolate,
    description:
      "Massa de chocolate, recheio cremoso e cobertura de brigadeiro.",
  },
  {
    id: 2,
    name: "Bolo de Cenoura",
    category: "Bolos",
    price: 32.9,
    image: images.carrot,
    description: "Massa fofinha de cenoura com cobertura de chocolate.",
  },
  {
    id: 3,
    name: "Bolo de Ninho com Morango",
    category: "Bolos",
    price: 39.9,
    image: images.berry,
    description: "Massa branca, creme de ninho e morangos frescos.",
  },
  {
    id: 4,
    name: "Red Velvet",
    category: "Bolos",
    price: 42.9,
    image: images.redVelvet,
    description: "Massa aveludada de chocolate com creme de baunilha.",
  },
  {
    id: 5,
    name: "Bolo de Prestígio",
    category: "Bolos",
    price: 36.9,
    image: images.prestigio,
    description: "Coco e chocolate em uma combinação clássica.",
  },
  {
    id: 6,
    name: "Brigadeiro",
    category: "Bolo de pote",
    price: 25.9,
    image: images.burger,
    description: "Hambúrguer artesanal, bacon, queijo e molho da casa.",
  },
  {
    id: 7,
    name: "Brownie Gourmet",
    category: "Doces",
    price: 8.5,
    image: images.brownie,
    description: "Brownie intenso de chocolate com casquinha crocante.",
  },
];

const categories = [
  { name: "Todos", icon: Sparkles },
  { name: "Bolos", icon: Cake },
  { name: "Doces", icon: Heart },
  { name: "Bolo de pote", icon: Leaf },
];

function money(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function Logo() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-3"
    >
      <img
        src="/logo.jpeg"
        alt="Logo Meu Céu"
        className="h-11 w-11 rounded-[5px] object-contain"
      />

      <div className="text-left">
        <div
          className="font-display text-xl font-bold italic"
          style={{ color: CORES.coral }}
        >
          Meu Céu
        </div>

        <div
          className="text-[8px] font-bold uppercase tracking-[.25em]"
          style={{ color: CORES.azulEscuro }}
        >
          confeitaria
        </div>
      </div>
    </button>
  );
}

function Header({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{
        background: "#f9dfc5",
        borderColor: CORES.borda,
      }}
    >
 <div className="mx-auto flex max-w-[1600px] items-center justify-between px-1 py-4 lg:px-2">
        <Logo />

        <nav className="hidden items-center  gap-10 md:flex">
          {[
            ["Início", "home"],
            ["Cardápio", "cardapio"],
            ["Bolos", "bolos"],
            ["Sobre nós", "sobre"],
            ["Contato", "contato"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="text-[18px] font-medium transition"
              style={{ color: CORES.azulEscuro }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = CORES.coral)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = CORES.azulEscuro)
              }
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full border p-2 transition"
            style={{
              color: CORES.azulEscuro,
              borderColor: CORES.borda,
            }}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full border p-2 md:hidden"
            style={{
              color: CORES.azulEscuro,
              borderColor: CORES.borda,
            }}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="border-t px-5 py-4 md:hidden"
          style={{
            background: CORES.creme,
            borderColor: CORES.borda,
          }}
        >
          <div className="grid gap-2">
            {[
              ["Início", "home"],
              ["Cardápio", "cardapio"],
              ["Bolos", "bolos"],
              ["Sobre nós", "sobre"],
              ["Contato", "contato"],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="rounded-xl px-4 py-3 text-left"
                style={{ color: CORES.azulEscuro }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}


function Hero() {
  const [imagemAtual, setImagemAtual] = useState(0);

  const fotos = [
    { src: images.chocolate, alt: "Bolo de chocolate" },
    { src: images.carrot, alt: "Bolo de cenoura" },
    { src: images.berry, alt: "Bolo de morango" },
    { src: images.redVelvet, alt: "Bolo Red Velvet" },
  ];

  const goMenu = () => {
    document.getElementById("cardapio")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagemAtual((atual) => (atual + 1) % fotos.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section
      id="home"
      className="mx-auto max-w-[1700px] px-5 pb-14 pt-8 lg:px-8 lg:pt-10"
    >
      <div
        className="relative overflow-hidden rounded-[1rem] border shadow-xl"
        style={{
          background: CORES.azul,
          borderColor: "#A9D8D9",
        }}
      >
        <div className="grid min-h-[520px] lg:grid-cols-2">

          <div
  className="flex items-center"
  style={{
    background:
      "linear-gradient(to right, #19797e 0%, #3ad6de 60%, #A9D8D9 )",
  }}
>
            <div className="max-w-2xl px-7 py-16 lg:px-14">
              <p
                className="mb-4 text-sm font-bold uppercase tracking-[.3em]"
                style={{ color: "#FFE1D8" }}
              >
                Doces momentos
              </p>

              <h1 className="font-display text-5xl font-bold leading-[.95] text-white sm:text-6xl lg:text-7xl">
                Momentos especiais{" "}
                <span
                  className="italic"
                  style={{ color: CORES.coralClaro }}
                >
                  começam
                </span>{" "}
                com um bolo.
              </h1>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/85">
                Bolos, doces e sabores preparados para deixar cada momento
                ainda mais especial.
              </p>

              <button
                onClick={goMenu}
                className="mt-8 flex items-center gap-2 rounded-xl px-5 py-3 font-bold text-white transition hover:scale-105"
                style={{ background: CORES.coral }}
              >
                Ver cardápio
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="relative min-h-[350px] lg:min-h-0">
            {fotos.map((foto, index) => (
              <img
                key={foto.src}
                src={foto.src}
                alt={foto.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  index === imagemAtual ? "opacity-100" : "opacity-0"
                }`}
              />

            ))}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(22,127,133,.15), transparent 40%)",
              }}
            />

            <div className="absolute bottom-6 right-7 z-10 flex gap-2">
              {fotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImagemAtual(index)}
                  aria-label={`Mostrar imagem ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === imagemAtual ? "w-8" : "w-2"
                  }`}
                  style={{
                    background:
                      index === imagemAtual ? CORES.coral : "#FFFFFF",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CategoryTabs({ selected, setSelected }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map(({ name, icon: Icon }) => {
        const active = selected === name;

        return (
          <button
            key={name}
            onClick={() => setSelected(name)}
            className="flex shrink-0 items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold transition"
            style={{
              background: active ? CORES.coral : "#FFFFFF",
              color: active ? "#FFFFFF" : CORES.azulEscuro,
              borderColor: active ? CORES.coral : CORES.borda,
            }}
          >
            <Icon size={16} />
            {name}
          </button>
        );
      })}
    </div>
  );
}

function ProductCard({ product, onOpen }) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg"
      style={{ borderColor: "#E8D9CF" }}
    >
      <button
        onClick={() => onOpen(product)}
        className="block w-full text-left"
      >
        <div className="relative aspect-[1.25] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white"
            style={{ background: CORES.coral }}
          >
            {product.category}
          </span>
        </div>
      </button>

      <div className="p-4">
        <h3
          className="font-semibold"
          style={{ color: CORES.azulEscuro }}
        >
          {product.name}
        </h3>

        <p
          className="mt-1 line-clamp-2 text-xs leading-5"
          style={{ color: "#4F7779" }}
        >
          {product.description}
        </p>

       
      </div>
    </article>
  );
}

function MenuSection({ products, onOpen }) {
  const [selected, setSelected] = useState("Todos");

  const filtered = useMemo(() => {
    return products.filter(
      (product) =>
        selected === "Todos" || product.category === selected
    );
  }, [products, selected]);

  return (
    <section
      id="cardapio"
      className="mx-auto max-w-[1700px] px-5 py-16 lg:px-8"
    >
      <div className="mb-7">
        <p
          className="mb-2 text-xs font-bold uppercase tracking-[.3em]"
          style={{ color: CORES.coral }}
        >
          Nossos bolos e doces
        </p>

        <h2
          className="font-display text-4xl font-bold sm:text-5xl"
          style={{ color: CORES.azulEscuro }}
        >
          Escolha seu favorito.
        </h2>
      </div>

      <CategoryTabs
        selected={selected}
        setSelected={setSelected}
      />

      <div className="mt-7 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border bg-white shadow-2xl"
        style={{ borderColor: CORES.borda }}
      >
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[300px]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />

            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2"
              style={{ color: CORES.azulEscuro }}
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-7 sm:p-9">
            <span
              className="rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ background: CORES.coral }}
            >
              {product.category}
            </span>

            <h3
              className="mt-5 font-display text-4xl font-bold"
              style={{ color: CORES.azulEscuro }}
            >
              {product.name}
            </h3>

            <p
              className="mt-4 leading-7"
              style={{ color: "#4F7779" }}
            >
              {product.description}
            </p>

           

            <a
              href="https://wa.me/5533999695153"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-white"
              style={{ background: CORES.coral }}
            >
              Encomendar bolo
              <CalendarDays size={17} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomCake() {
  const [imagemAtual, setImagemAtual] = useState(0);

  const fotosBolo = [
    {
      src: images.berry,
      alt: "Bolo de morango",
    },
    {
      src: images.chocolate,
      alt: "Bolo de chocolate",
    },
    {
      src: images.carrot,
      alt: "Bolo de cenoura",
    },
    {
      src: images.redVelvet,
      alt: "Bolo Red Velvet",
    },
    {
      src: images.prestigio,
      alt: "Bolo Red Velvet",
    },
  ];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagemAtual((atual) => (atual + 1) % fotosBolo.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  const [size, setSize] = useState(["1 kg", 59.9]);

  const [flavor, setFlavor] = useState("Chocolate");

  const [filling, setFilling] = useState("Ninho");

  const [topping, setTopping] = useState("Ganache");

  const extra =
    flavor === "Red Velvet"
      ? 8
      : filling === "Doce de leite"
      ? 4
      : 0;

  const total = size[1] + extra;

  const options = [
    [
      "Massa",
      [
        "Chocolate",
        "Pão de ló",
        "Amanteigada",
        "Cenoura",
        "Red Velvet",
      ],
      flavor,
      setFlavor,
    ],
    [
      "Recheio",
      [
        "Brigadeiro",
        "Brigadeiro branco",
        "Ninho",
        "Ninho com morango",
        "Abacaxi",
        "Coco",
        "Doce de leite",
      ],
      filling,
      setFilling,
    ],
    [
      "Cobertura",
      [
        "Chantininho",
        "Buttercream",
        "Pasta americana",
        "Ganache",
      ],
      topping,
      setTopping,
    ],
  ];

  return (
    <section
      id="bolos"
      className="mx-auto max-w-[1700px] px-5 py-16 lg:px-8"
    >
      <div
        className="overflow-hidden rounded-3xl border bg-white"
        style={{ borderColor: CORES.borda }}
      >
        <div className="grid lg:grid-cols-2">

          <div className="relative min-h-[480px]">

            {fotosBolo.map((foto, index) => (
              <img
                key={foto.src}
                src={foto.src}
                alt={foto.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                  index === imagemAtual
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              />
            ))}

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(23,107,112,.95), transparent 70%)",
              }}
            />

            <div className="absolute bottom-8 left-8 right-8">
              <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
                Monte o seu bolo.
              </h2>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
                Escolha os detalhes e crie um bolo do seu jeito para aquele
                momento especial.
              </p>
            </div>
          </div>

          <div className="p-7 sm:p-10">
            <div className="space-y-7">

              <div>
                <p
                  className="mb-3 text-sm font-bold"
                  style={{ color: CORES.azulEscuro }}
                >
                  1. Tamanho
                </p>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    ["1 kg", 59.9],
                    ["1,5 kg", 74.9],
                    ["2 kg", 89.9],
                  ].map((item) => {
                    const active = size[0] === item[0];

                    return (
                      <button
                        key={item[0]}
                        onClick={() => setSize(item)}
                        className="rounded-xl border p-3 text-left"
                        style={{
                          borderColor: active
                            ? CORES.coral
                            : CORES.borda,
                          background: active
                            ? "#FFF0EB"
                            : "#FFFFFF",
                        }}
                      >
                        <div
                          className="text-sm font-bold"
                          style={{ color: CORES.azulEscuro }}
                        >
                          {item[0]}
                        </div>

                        <div
                          className="mt-1 text-xs"
                          style={{ color: CORES.coral }}
                        >
                          {money(item[1])}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {options.map(
                ([title, items, selected, setSelected]) => (
                  <div key={title}>
                    <p
                      className="mb-3 text-sm font-bold"
                      style={{ color: CORES.azulEscuro }}
                    >
                      {title}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => {
                        const active = selected === item;

                        return (
                          <button
                            key={item}
                            onClick={() => setSelected(item)}
                            className="rounded-xl border px-4 py-2.5 text-sm"
                            style={{
                              background: active
                                ? CORES.coral
                                : "#FFFFFF",
                              color: active
                                ? "#FFFFFF"
                                : CORES.azulEscuro,
                              borderColor: active
                                ? CORES.coral
                                : CORES.borda,
                            }}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )
              )}

              <div
                className="grid gap-4 rounded-2xl border p-4 sm:grid-cols-[1fr_auto] sm:items-center"
                style={{
                  background: CORES.azulClaro,
                  borderColor: CORES.borda,
                }}
              >
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "#5C8183" }}
                  >
                    Valor estimado
                  </p>

                  <p
                    className="mt-1 text-2xl font-bold"
                    style={{ color: CORES.azulEscuro }}
                  >
                    {money(total)}
                  </p>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "#6B8B8D" }}
                  >
                    {size[0]} · {flavor} · {filling} · {topping}
                  </p>
                </div>

                <a
                  href="https://wa.me/5533999695153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-white"
                  style={{ background: CORES.coral }}
                >
                  Encomendar bolo
                  <CalendarDays size={17} />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contato"
      className="border-t"
      style={{
        background: CORES.azul,
        borderColor: "#8BCDCF",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/80">
            Bolos, doces e momentos especiais. Um cardápio digital criado
            para apresentar produtos de forma simples, bonita e organizada.
          </p>
        </div>

        <div id="sobre">
          <h3 className="font-bold text-white">Sobre nós</h3>

          <p className="mt-4 text-sm leading-6 text-white/80">
            O Meu Céu é uma confeitaria criada para apresentar um cardápio
            moderno de bolos e doces, facilitando a escolha dos produtos e
            tornando a experiência do cliente mais agradável.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Contato</h3>

          <div className="mt-4 space-y-2 text-sm text-white/80">
            <p>Rua dos Sabores, 120</p>
            <p>(33) 99999-0000</p>
            <p>contato@doceesabor.com</p>
          </div>
        </div>
      </div>

      <div
        className="border-t py-5 text-center text-xs text-white/70"
        style={{ borderColor: "#8BCDCF" }}
      >
        © 2026 Meu Céu · Projeto Front-End
      </div>
    </footer>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div
      className={dark ? "min-h-screen dark-theme" : "min-h-screen"}
      style={{
        background: dark ? "#151515" : CORES.creme,
        color: dark ? "#F5F5F5" : CORES.azulEscuro,
      }}
    >
      <style>{`
        .dark-theme {
          background: #151515 !important;
          color: #f5f5f5 !important;
        }

        .dark-theme header {
          background: #1d1d1d !important;
          border-color: #333 !important;
        }

        .dark-theme header button {
          color: #f5f5f5 !important;
        }

        .dark-theme header .border {
          border-color: #444 !important;
        }

        .dark-theme header > div + div {
          background: #1d1d1d !important;
          border-color: #333 !important;
        }

        .dark-theme main {
          background: #151515 !important;
        }

        .dark-theme article {
          background: #202020 !important;
          border-color: #383838 !important;
        }

        .dark-theme article h3 {
          color: #f5f5f5 !important;
        }

        .dark-theme article p {
          color: #b9c8c9 !important;
        }

        .dark-theme main section h2,
        .dark-theme main section h3 {
          color: #f5f5f5 !important;
        }

        .dark-theme main section .bg-white {
          background: #202020 !important;
        }

        .dark-theme main section button {
          border-color: #444 !important;
        }

        .dark-theme .fixed.inset-0 > div {
          background: #202020 !important;
          border-color: #444 !important;
        }

        .dark-theme .fixed.inset-0 h3 {
          color: #f5f5f5 !important;
        }

        .dark-theme .fixed.inset-0 p {
          color: #b9c8c9 !important;
        }
      `}</style>

      <Header
        dark={dark}
        setDark={setDark}
      />

      <main>
        <Hero />

        <MenuSection
          products={products}
          onOpen={setSelectedProduct}
        />

        <CustomCake />
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default App;