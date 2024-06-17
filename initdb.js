const sql = require("better-sqlite3");
const db = sql("meals.db");

const dummyMeals = [
  {
    title: "Hambúrguer Suculento de Queijo",
    slug: "hamburguer-suculento-de-queijo",
    image: "/images/burger.jpg",
    summary:
      "Um hambúrguer de dar água na boca com um suculento bife de carne e queijo derretido, servido em um pão macio.",
    instructions: `
        1. Preparar o bife:
           Misture 200g de carne moída com sal e pimenta. Forme um bife.
  
        2. Cozinhar o bife:
           Aqueça uma panela com um pouco de óleo. Cozinhe o bife por 2-3 minutos de cada lado, até dourar.
  
        3. Montar o hambúrguer:
           Torre as metades do pão de hambúrguer. Coloque alface e tomate na metade inferior. Adicione o bife cozido e cubra com uma fatia de queijo.
  
        4. Servir:
           Complete a montagem com a metade superior do pão e sirva quente.
      `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Curry Picante",
    slug: "curry-picante",
    image: "/images/curry.jpg",
    summary:
      "Um curry rico e picante, infundido com especiarias exóticas e leite de coco cremoso.",
    instructions: `
        1. Picar os vegetais:
           Corte os vegetais de sua escolha em pedaços pequenos.
  
        2. Refogar os vegetais:
           Em uma panela com óleo, refogue os vegetais até começarem a amolecer.
  
        3. Adicionar pasta de curry:
           Adicione 2 colheres de sopa de pasta de curry e cozinhe por mais um minuto.
  
        4. Cozinhar com leite de coco:
           Despeje 500ml de leite de coco e deixe ferver. Cozinhe por cerca de 15 minutos.
  
        5. Servir:
           Desfrute deste curry cremoso com arroz ou pão.
      `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },
  {
    title: "Dumplings Caseiros",
    slug: "dumplings-caseiros",
    image: "/images/dumplings.jpg",
    summary:
      "Dumplings macios recheados com carne saborosa e vegetais, cozidos no vapor até a perfeição.",
    instructions: `
        1. Preparar o recheio:
           Misture carne moída, vegetais ralados e especiarias.
  
        2. Rechear os dumplings:
           Coloque uma colher de recheio no centro de cada massa de dumpling. Molhe as bordas e dobre para selar.
  
        3. Cozinhar no vapor:
           Arrume os dumplings em uma panela a vapor. Cozinhe no vapor por cerca de 10 minutos.
  
        4. Servir:
           Desfrute destes dumplings quentes, com um molho de sua escolha.
      `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },
  {
    title: "Macarrão com Queijo Clássico",
    slug: "macarrao-com-queijo-classico",
    image: "/images/macncheese.jpg",
    summary:
      "Macarrão cremoso e queijo, um clássico reconfortante que agrada a todos.",
    instructions: `
        1. Cozinhar o macarrão:
           Ferva o macarrão de acordo com as instruções do pacote até ficar al dente.
  
        2. Preparar o molho de queijo:
           Em uma panela, derreta a manteiga, adicione a farinha e gradualmente adicione o leite, mexendo até engrossar. Adicione o queijo ralado e mexa até derreter.
  
        3. Combinar:
           Misture o molho de queijo com o macarrão escorrido.
  
        4. Assar:
           Transfira para um prato de forno, cubra com farinha de rosca e asse até dourar.
  
        5. Servir:
           Sirva quente, guarnecido com salsa, se desejar.
      `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },
  {
    title: "Pizza Autêntica",
    slug: "pizza-autentica",
    image: "/images/pizza.jpg",
    summary:
      "Pizza de massa feita à mão com molho de tomate picante, coberturas frescas e queijo derretido.",
    instructions: `
        1. Preparar a massa:
           Amasse a massa de pizza e deixe crescer até dobrar de tamanho.
  
        2. Modelar e adicionar coberturas:
           Estenda a massa, espalhe o molho de tomate e adicione suas coberturas e queijos favoritos.
  
        3. Assar a pizza:
           Asse em forno pré-aquecido a 220°C por cerca de 15-20 minutos.
  
        4. Servir:
           Corte quente e desfrute com uma pitada de folhas de manjericão.
      `,
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
  },
  {
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "Costeleta de vitela empanada, crocante e dourada, um prato clássico austríaco.",
    instructions: `
        1. Preparar a vitela:
           Bata as costeletas de vitela até ficarem com espessura uniforme.
  
        2. Empanar a vitela:
           Passe cada costeleta na farinha, mergulhe nos ovos batidos e depois na farinha de rosca.
  
        3. Fritar o schnitzel:
           Aqueça o óleo em uma panela e frite cada schnitzel até dourar de ambos os lados.
  
        4. Servir:
           Sirva quente com uma fatia de limão e uma salada de batata ou verduras.
      `,
    creator: "Franz Huber",
    creator_email: "franzhuber@example.com",
  },
  {
    title: "Salada Fresca de Tomate",
    slug: "salada-fresca-de-tomate",
    image: "/images/tomato-salad.jpg",
    summary:
      "Uma salada leve e refrescante com tomates maduros, manjericão fresco e um vinagrete picante.",
    instructions: `
        1. Preparar os tomates:
           Fatie os tomates frescos e arrume-os em um prato.
  
        2. Adicionar ervas e temperos:
           Polvilhe manjericão picado, sal e pimenta sobre os tomates.
  
        3. Temperar a salada:
           Regue com azeite e vinagre balsâmico.
  
        4. Servir:
           Desfrute desta salada simples e saborosa como acompanhamento ou refeição leve.
      `,
    creator: "Sophia Green",
    creator_email: "sophiagreen@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS meals (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       summary TEXT NOT NULL,
       instructions TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `);

  for (const meal of dummyMeals) {
    stmt.run(meal);
  }
}

initData();
