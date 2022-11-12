import { useState, useEffect } from "react";

import { toast } from "react-toastify";

import { db } from "../../services/firebaseConnection";
import { 
    addDoc, 
    collection, 
    onSnapshot,
    query,
    orderBy,
    doc,
    deleteDoc
} from "firebase/firestore";

import Header from "../../components/Header/Header";
import Logo from "../../components/Logo/Logo";
import Input from '../../components/Input/Input';

import styles from "./Admin.module.css";

const Admin = () => {
    const [ dataLink, setDataLink ] = useState({ title: "", url: "", backgroundColor: "#FFFFFF", color: "#000000", icon: "bi bi-link"});
    const [ links, setLinks ] = useState([]);
    const [ id, setId ] = useState("");

    useEffect(() => {

        const id = JSON.parse(localStorage.getItem("@detailsUser")).uid;
        setId(id);

        const linkRef = collection(db, "links");
        const queryRef = query(linkRef, orderBy("created", "asc"));

        onSnapshot(queryRef, (snapshot) => {
            let list = [];

            snapshot.forEach((doc) => {
                list.push({
                    id: doc.id,
                    title: doc.data().title,
                    url: doc.data().url,
                    bgColor: doc.data().bgColor,
                    color: doc.data().color,
                })
            });

            setLinks(list);
        });

    }, []);

    async function handleCreateLink(event) {
        event.preventDefault();

        if(
            dataLink.title === "" ||
            dataLink.url === ""
        )   {
            toast.warning("Preencha todos os campos!");
            return;
        }

        addDoc(collection(db, "links"), {
            title: dataLink.title,
            url: dataLink.url,
            bgColor: dataLink.backgroundColor,
            color: dataLink.color,
            icon: dataLink.icon,
            created: new Date()
        })
        .then(() => {

            toast.success("Link criado com sucesso!");

            setDataLink({ title: "", url: "", backgroundColor: "#FFFFFF", color: "#000000", icon: "bi bi-link"});

        })
        .catch((error) => {

            toast.error("Erro ao criar o link!");

            console.log(error);

        });

    }

    async function handleDeleteLink(id) {
        const docRef = doc(db, "links", id);

        await deleteDoc(docRef);

        toast.success("Link excluído com sucesso!");
    }
    
    return(
        <div className={styles.admin_container}>
            <Header id={id} />
            
            <Logo />

            <form className={styles.form} onSubmit={handleCreateLink}>
                <div className={styles.field}>
                    <label htmlFor="title">Título do link</label>
                    <Input 
                        type="text"
                        placeholder="Digite o título do link"
                        id="title"
                        name="title"
                        value={dataLink.title}
                        onChange={(event) => setDataLink({...dataLink, title: event.target.value})} 
                    />
                </div>
                <div className={styles.field}>
                    <label htmlFor="url">URL do link</label>
                    <Input 
                        type="url"
                        placeholder="Digite a URL do link"
                        id="url"
                        name="url"
                        value={dataLink.url}
                        onChange={(event) => setDataLink({...dataLink, url: event.target.value})} 
                    />
                </div>
                <section className={styles.colors}>
                    <div className={styles.field}>
                        <label htmlFor="backgroundColor">Fundo do link:</label>
                        <input 
                            type="color" name="backgroundColor" id="backgroundColor" value={dataLink.backgroundColor}
                            onChange={(event) => setDataLink({...dataLink, backgroundColor: event.target.value})}  
                        />
                        
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="color">Cor do link:</label>
                        <input 
                            type="color" name="color" id="color" value={dataLink.color}
                            onChange={(event) => setDataLink({...dataLink, color: event.target.value})} 
                        />
                    </div>
                </section>
                
                <section className={styles.icon}>
                    <p>Ícone do link:</p>
                    
                    <div className={styles.icons_container}>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="youtube" value="bi bi-youtube"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="youtube">Youtube</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="linkedin" value="bi bi-linkedin"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="linkedin">Linkedin</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="facebook" value="bi bi-facebook"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="facebook">Facebook</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="twitter" value="bi bi-twitter"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="twitter">Twitter</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="instagram" value="bi bi-instagram"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="instagram">Instagram</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="twitch" value="bi bi-twitch"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="twitch">Twitch</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="pinterest" value="bi bi-pinterest"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="pinterest">Pinterest</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="spotify" value="bi bi-spotify"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="spotify">Spotify</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="telegram" value="bi bi-telegram"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="telegram">Telegram</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="whatsapp" value="bi bi-whatsapp"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="whatsapp">Whatsapp</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="discord" value="bi bi-discord"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="discord">Discord</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="github" value="bi bi-github"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="github">GitHub</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="medium" value="bi bi-medium"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="medium">Medium</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="reddit" value="bi bi-reddit"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="reddit">Reddit</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="stack-overflow" value="bi bi-stack-overflow"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="stack-overflow">Stack Overflow</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="slack" value="bi bi-slack"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="slack">Slack</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="steam" value="bi bi-steam"
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="steam">Steam</label>
                        </div>
                        <div className={styles.field}>
                            <input 
                                type="radio" name="icon" id="link" value="bi bi-link" defaultChecked={true}
                                onChange={(event) => setDataLink({...dataLink, icon: event.target.value})}
                            />
                            <label htmlFor="link">Outro</label>
                        </div>
                    </div>
                </section>

                {
                    dataLink.title.length > 0 &&
                    <div className={styles.preview}>
                        <span>Veja como está ficando 👇</span>
                        <article 
                            className={styles.preview_link}
                            style={{backgroundColor: dataLink.backgroundColor}}
                        >
                            <a href={dataLink.url}>
                                <p className={styles.preview_link_title} style={{color: dataLink.color}}>
                                    {dataLink.title}
                                    <i className={dataLink.icon}></i>
                                </p>
                            </a>
                        </article>
                    </div>
                }

                <button type="submit">Cria link</button>
            </form>

            <h2 className={styles.title}>Meus links</h2>

            {
                links.map((item, index) => (
                    <article 
                        className={styles.link}
                        style={{backgroundColor: item.bgColor}}
                        key={index}
                    >
                        <p style={{color: item.color}}>{item.title}</p>
                        <div>
                            <button className={styles.btn_delete} onClick={() => handleDeleteLink(item.id)}>
                                <i className="bi bi-trash" style={{color: item.color}}></i>
                            </button>
                        </div>
                    </article>
                ))
            }
        </div>
    )
};

export default Admin;