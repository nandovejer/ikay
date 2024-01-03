// const URL_API = "https://ipapi.co/json/";
const URL_API = "../test/ipmock.json";;

const fetchIpData = (url = URL_API) => {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error server response');
            }
        })


}

function ikayByIp() {

    const handleData = (dataApi) => {
        return {
            ip: dataApi.ip,
            city: dataApi.city,
            region: dataApi.region,
            country: dataApi.country_name,
            timezone: dataApi.timezone,
            postal: dataApi.postal,
            map: {
                lat: dataApi.latitude,
                lon: dataApi.longitude
            },
            companyInternet: dataApi.org,
        }
    }
    return fetchIpData()
        .then(data => handleData(data))
        .catch(error => { console.error('Error request:', error) });
}
export default ikayByIp;

