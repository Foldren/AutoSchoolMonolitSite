from fastapi_mail import ConnectionConfig


mail_conf = ConnectionConfig(
    MAIL_USERNAME="schoolselectavtoshkola@gmail.com",
    MAIL_PASSWORD="coeegulnrguxfrgb",
    MAIL_FROM="schoolselectavtoshkola@gmail.com",
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_FROM_NAME="Уведомления SchoolSelect",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
)