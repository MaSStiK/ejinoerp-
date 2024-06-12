import { useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { DataContext } from "../Context"
import { setPageTitle } from "../Global"
import ButtonImage from "../ButtonImage/ButtonImage"
import imgCopy from "../../assets/svg/Copy.svg"
import imgRosehip from "../../assets/images/Tools/rosehip.png"
import imgSearch from "../../assets/svg/Search.svg"

import "./ToolsPage.css"

export default function ToolsPage({ doLogout }) {
    useEffect(() => {setPageTitle("Инструменты")}, [])
    const Context = useContext(DataContext)
    const Navigate = useNavigate()
    
    function logoutProfile() {
        localStorage.clear()
        Navigate("/")
        window.location.reload()
    }

    // Если переход с ссылки на выход из профиля
    useEffect(() => {
        if (doLogout) {
            logoutProfile()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.href])

    return (
        <article>
            <h4 className="page-title">h/tools</h4>

            <section className="flex-col">
                <h1>Шиповник <small className="text-gray">(feat. Даня)</small></h1>
                <h3>Данный список представляет собой сведения о существах, представляющих угрозу существования Кулсториробоба и его жителям</h3>
                <ButtonImage
                    src={imgRosehip}
                    text="Список Шиповника"
                    onClick={() => Navigate("rosehip")}
                />
            </section>

            {/* Если пользователь авторизован */}
            {Context.userData
                ? <>
                    <section className="flex-col">
                        <h1>Новость из сообщения в ВК</h1>
                        <h3>Создайте новость из своего сообщения в беседе Ежиного-РП прямо на сайте</h3>
                        {Context.userData.country_id
                            ? <ButtonImage
                                src={imgSearch}
                                alt="find"
                                text="Найти сообщение"
                                onClick={() => Navigate("find-message")}
                              />
                            : <p>Скачало вам нужно создать свою страну</p>
                        }
                        
                    </section>
                    
                    <section className="flex-col">
                        <h3>Запасной выход из профиля <br /><p className="text-gray">(+ сброс сайта)</p></h3>
                        
                        <div className="flex-row" style={{flexWrap: "wrap"}}>
                            <div>
                                <p>Ссылка на функцию</p>
                                <Link to={"exit"} className="text-link">{window.location.origin + "/tools/exit"}</Link>
                            </div>
                            <ButtonImage
                                src={imgCopy}
                                alt="copy"
                                text="Скопировать"
                                onClick={() => navigator.clipboard.writeText(window.location.origin + "/tools/exit")}
                            />
                        </div>
                    </section>
                  </>
                : <section>
                    <h4>Авторизуйтесь, чтобы увидеть еще больше инструментов</h4>
                  </section>
            }

            
        </article>
    )
}
