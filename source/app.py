from os import path
from typing import Annotated
from fastapi import FastAPI, Form
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi import Request
from fastapi_mail import MessageSchema, MessageType, FastMail
from settings import mail_conf

app = FastAPI()

# Подключаем статику
this_directory = path.dirname(__file__)
app.mount("/source/static", StaticFiles(directory=path.join(this_directory, "static")), name="static")
templates = Jinja2Templates(directory=path.join(this_directory, "templates"))


@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse("main.html", {"request": request})


@app.post("/send-application")
async def send_mail(username: Annotated[str, Form()], phone: Annotated[str, Form()], politics: Annotated[bool, Form()]):
    html = f"""
              <p>🦱 Имя клиента: {username}</p>
              <p>📞 Телефон клиента: {phone}</p><br>
              <p>Согласен с политикой конфиденциальности, другого варианта нет🤷‍♂️</p>
           """

    message = MessageSchema(
        subject="❗🔖 Новая заявка по сайту Autoschool Select! Скорее звони!",
        recipients=["schoolselectavtoshkola@gmail.com"],
        body=html,
        subtype=MessageType.html
    )

    fm = FastMail(mail_conf)
    await fm.send_message(message)

    return 1
