const API_KEY = `e71eae124badee680cfe4eb6bf1e0b3d`;

const loadWeatherData = city => {                               //API এই লিংকে ইউনিক=ম্যাট্রিক্স কনভার্ট করতে হবে
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data=>displayData(data))
}
const displayData = data => {
    // console.log(data)
    // const temperatureData = document.getElementById('temperature')
    // temperatureData.innerText=data.main.temp
    setDetails('temperature', data.main.temp)   //ফাংশনের আইডি এবং কতগুলো পাস করা হলো
    setDetails('condition',data.weather[0].main)
}
// যেকোনো প্যারামিটার দিয়ে একটি অংশ ডিক্লেয়ার করা হলো 
const setDetails = (temp, text) => {
    const temperatureData = document.getElementById(temp)
    temperatureData.innerText=text
}
// বাটনের জন্য একটি ক্লিক ইভেন হ্যান্ডেলার ব্যবহার করুন
document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field')
     searchText = searchField.value;
    // console.log(searchText)
    document.getElementById('city').innerText = searchText;
    // সার্চ দিলে যে ভ্যালু দেওয়া হবে তা লোড ওয়েদার ডাটা তে পাস করা হবে
    loadWeatherData(searchText)

})

loadWeatherData()