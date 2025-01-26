import Image from "next/image";

export async function getStaticProps() {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=21.028511&lon=105.804817&appid=30de923456283628da276346257b5d19')
    const repo = await res.json()
    return {props: {repo}}
}

export default function Home({repo}) {

    console.log(repo);
    let iconCode = repo.weather[0].icon;

    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td className="city">{repo.name}</td>
                    <td className="icon">
                        <Image src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} alt={"Weather image"} width={110} height={110} />
                    </td>
                    <td className="temperature">{Math.round(repo.main.temp - 273.15)}<span className="degree"> ℃</span></td>
                    <td className="details">
                        Weather: <span style={{fontWeight: "bold"}}>{repo.weather[0].description}</span><br/>
                        Humidity: <span style={{fontWeight: "bold"}}>{repo.main.humidity} %</span><br/>
                        Wind speed: <span style={{fontWeight: "bold"}}>{repo.wind.speed} m/s</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}
