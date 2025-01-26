export async function getStaticProps() {
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=21.028511&lon=105.804817&appid=30de923456283628da276346257b5d19')
    const repo = await res.json()
    return {props: {repo}}
}

export default function Home({repo}) {

    // export default function Page({ repo }) {
    //     return repo.stargazers_count
    // }
    console.log(repo);

    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                <tr>
                    <td className="city">{repo.name}</td>
                    <td className="icon">{repo.weather[0].icon}</td>
                    <td className="temperature">{Math.round(repo.main.temp - 273.15)} ℃</td>
                    <td className="details">
                        Weather description: <span style={{fontWeight: "bold"}}>{repo.weather[0].description}</span><br/>
                        Humidity: {repo.main.humidity} %<br/>
                        Wind speed: {repo.wind.speed} m/s
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}
