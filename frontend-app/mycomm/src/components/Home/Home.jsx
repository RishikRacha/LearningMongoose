import { useState } from "react";
import IplComp from "../IplComp/IplComp";
import './Home.css'
import Name from "../../redux/component/Name/Name";
function Home() {

    function changeTitle() {
        document.getElementsByClassName('title')[0].innerHTML = "CHANGED";
        console.log('triggered');
    }
    const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam id soluta veritatis sapiente, repudiandae distinctio qui voluptas culpa exercitationem. Iusto facere laborum voluptate vero magni distinctio dolor minima eos suscipit tempora ratione, corrupti hic nam mollitia dolores, debitis ea necessitatibus reiciendis fuga id, molestiae porro assumenda magnam natus? Atque velit, nobis omnis voluptates illo incidunt alias eos odit vero at ut et! Repudiandae, architecto ipsam, cum sunt nisi eius similique beatae rem ratione itaque eum ad enim veniam. Porro, eveniet! Debitis soluta sint impedit est sequi nobis eaque quam laboriosam. Accusantium autem optio, aperiam quibusdam veritatis, vitae quia, id dolor ipsa sequi fugit? Omnis repellendus ipsum illum dolore distinctio nulla assumenda ullam, sunt laborum placeat qui! Temporibus inventore, non in rem odit amet illum dolorum, perferendis ipsam suscipit, voluptate maiores explicabo sequi eos eius totam quidem itaque maxime necessitatibus ratione natus error. Dolores modi a hic! Officiis tempore distinctio unde quos enim! Accusantium fugiat quos suscipit sed quisquam! Nulla, nam accusantium in deleniti sunt quia a beatae quo. Recusandae, necessitatibus eos repellat nam pariatur dignissimos hic corporis, dolores est tempora quae qui omnis laudantium repudiandae nostrum iusto velit, totam itaque a quo rem alias corrupti odio! Dolorem non ab quis."
    let loremArr = lorem.split(" ");

    const [count, setCount] = useState(0)
    return (
        <>
            <h2 className="title">Home Page</h2>
            <p className="bodyText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, asperiores! Autem aliquid sapiente placeat beatae qui alias esse consequuntur recusandae obcaecati? Vero optio expedita quasi, numquam iste voluptas, accusantium commodi fugit molestias neque quae repellendus cupiditate doloremque libero. In ad quos optio? Ab magni aut velit quis omnis odio a pariatur corrupti, doloremque hic dignissimos exercitationem saepe officiis temporibus blanditiis quas doloribus, ullam eum nisi dicta mollitia. Amet fuga ipsum velit vitae accusantium atque ad ab in eos sequi molestiae voluptatibus, quaerat maiores libero omnis incidunt deleniti molestias sed quas. At repellat beatae eos accusamus reprehenderit ea porro doloribus quidem aspernatur quam pariatur, ratione delectus adipisci in nulla unde dolorum tenetur quod sit odio nemo corporis! Sint consequatur aliquid voluptatum alias iure nemo cum optio maiores, nesciunt tenetur? Veritatis minus autem laboriosam quidem. Hic nesciunt nam explicabo, doloribus labore ullam voluptatibus officia illo facere dicta asperiores accusantium ex odio sapiente nulla, quisquam minima dolorum consequuntur amet praesentium. Ipsa, culpa quisquam fugit aperiam iusto ex. Voluptatem dolorem esse eaque reprehenderit repudiandae sed vel alias quod, asperiores id molestias corporis odit voluptas voluptate maxime hic ipsa architecto autem saepe deleniti? Non fuga a illum deserunt commodi fugiat dolor enim, consectetur eius natus.</p>
            <p className="bodyText">{loremArr.slice(0,count).join(" ")}</p>
            <button onClick={() => setCount(count + 1)}>
                Count is: {count}
            </button> <br/><br/>

            <a onClick={changeTitle}> Change Title </a>
            <hr />
            {/* <Name/> */}
        </>
    )
}

export default Home;