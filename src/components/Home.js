import Card from "./Card";
import "../styles/_Home.scss"
import { infoMetodosArrays } from "../auxiliar/auxiliares";

const Home = () => {
    return (
        <main>
            <h1>
                Métodos de <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array">arrays</a> en JavaScript
            </h1>
            <div className="contenedor-cards">
                {
                infoMetodosArrays.map( curr =>                                         
                    <Card
                    key={curr.id}
                    metodo={curr.nombre}
                    />)
                }
            </div>
        </main>
    )
}

export default Home;