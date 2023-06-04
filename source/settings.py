from os import getcwd
from fastapi_mail import ConnectionConfig


MAIL_CONF = ConnectionConfig(
    MAIL_USERNAME="Avtoshkolaselect@yandex.ru", #"schoolselectavtoshkola@gmail.com",
    MAIL_PASSWORD="fszldwozgjhvukzf", #"coeegulnrguxfrgb",
    MAIL_FROM="Avtoshkolaselect@yandex.ru", #"schoolselectavtoshkola@gmail.com",
    MAIL_PORT=465,
    MAIL_SERVER="smtp.yandex.ru", #"smtp.gmail.com",
    MAIL_FROM_NAME="schoolselect",
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,
)
IS_LOCAL = "Pycharm" in getcwd()
STATIC_DIR = '/source/static' if IS_LOCAL else '//schoolselect.ru/source/static'
