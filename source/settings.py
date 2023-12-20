from os import getcwd
from fastapi_mail import ConnectionConfig


MAIL_CONF = ConnectionConfig(
    MAIL_PORT=465,
    MAIL_SERVER="smtp.gmail.com", #"smtp.yandex.ru",
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,
)
IS_LOCAL = "Pycharm" in getcwd()
STATIC_DIR = '/source/static' if IS_LOCAL else '//schoolselect.ru/source/static'
