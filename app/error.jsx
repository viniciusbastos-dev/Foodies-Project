"use client";

const Error = ({ error }) => {
  return (
    <main className="error">
      <h1>Ocorreu algum erro!</h1>
      <p>Falha ao buscar dados do servidor. Por favor tente novamente.</p>
    </main>
  );
};

export default Error;
