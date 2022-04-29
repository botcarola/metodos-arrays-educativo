import Card from "./Card";
import "../styles/_Home.scss"

const Home = () => {
    return (
        <main>
            <h1>
                Métodos de <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array">arrays</a> en JavaScript
            </h1>
            <Card 
            metodo={"push"}
            />       
        </main>
    )
}

export default Home;