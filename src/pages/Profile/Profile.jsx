import { useState, useEffect } from "react";

import styles from "./Profile.module.css";

import { db } from "../../services/firebaseConnection";
import { 
    collection,
    doc, 
    query,
    orderBy,
    getDoc,
    getDocs
} from "firebase/firestore";

import Header from "../../components/Header/Header";
import Logo from '../../components/Logo/Logo';

const Profile = () => {
    const [ links, setLinks ] = useState([]);
    const [ infoUser, setInfoUser ] = useState(null);
    const [ id, setId ] = useState(null);
    

    useEffect(() => {

        const detailsUser = JSON.parse(localStorage.getItem("@detailsUser"));

        if(detailsUser)    {
            const uid = detailsUser.uid;

            setId(uid);
        }

        const linksRef = collection(db, "links");
        const queryRef = query(linksRef, orderBy("created", "asc"));

        getDocs(queryRef)
        .then((snapshot) => {
            let list = [];

            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    title: doc.data().title,
                    url: doc.data().url,
                    bgColor: doc.data().bgColor,
                    color: doc.data().color,
                    icon: doc.data().icon
                })
            })

            setLinks(list);
        })

        const docRef = doc(db, "info-user", "info");

        getDoc(docRef)
        .then((snapshot) => {
            if(snapshot.data()) setInfoUser(snapshot.data());
        })

    }, []);

    return(
        <div className={styles.profile_container}>
            {
                id !== null && <Header />
            }

            {
                infoUser !== null ? 
                <div className={styles.info_user}>
                    <img src={infoUser.userPhoto} alt={infoUser.userName} />
                    <p>{infoUser.userName}</p>
                </div> :
                <Logo />
            }

            {
                links.length > 0 && <span className={styles.message}>Veja meus links abaixo 👇</span>
            }

            <main className={styles.link_container}>
                {
                    links.map((item) => (
                        <section className={styles.link} key={item.id} style={{backgroundColor: item.bgColor}}>
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <p className={styles.link_title} style={{color: item.color}}>
                                    {item.title}
                                    <i className={item.icon}></i>
                                </p>
                            </a>
                        </section>
                    ))
                }
            </main>
        </div>
    )
};

export default Profile;