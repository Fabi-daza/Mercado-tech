CREATE TABLE usuarios (
    user_id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(255),
    telefono VARCHAR(50),
    contraseña VARCHAR(255),
    imagen VARCHAR(250)
);

INSERT INTO usuarios (nombre,email,telefono,contraseña,imagen) VALUES
('Micheal Jennings', 'micheal.jennings@example.com','(969) 956-1919','$2a$12$n3xQ2m/DzSCDgBK8wC9k.eGvblvYmI8zP4UcwGmtv8oQ4.Rw27.oG','https://randomuser.me/api/portraits/men/67.jpg');

CREATE TABLE productos (
    product_id SERIAL PRIMARY KEY,
    titulo VARCHAR(255),
    descripcion VARCHAR(500),
    precio INT,
    imagen 	VARCHAR(250),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES usuarios(user_id)
);

INSERT INTO productos (titulo, descripcion, precio, imagen, user_id) VALUES
('PC Gamer LOTUS Ryzen 7 5800X', 'Procesador AMD RYZEN 5 5800X Refrigeración Líquida Cooler Master 240mm 2 Ventiladores RGB Tarjeta de Video RTX 4060 Ti Gabinete Gamer NZXT H5 (Preguntar por color disponible) Almacenamiento Disco Sólido SSD M.2 1TB PCI-E', 1790000, 'https://backend.dust2.gg/wp-content/uploads/2023/10/1666139048-h5-elite-hero-black-86ec8740-b800-4ad5-acb2-9dfad444b9f9-2cdc88e4-01ef-40d7-966d-7ec7fa26dcec.png', 1),
('Teclado Logitech MX Mechanical Mini SW', 'MX Mechanical es compatible con el reposamanos MX Conexión por Bluetooth o Logi Bolt No compatible con tecnología de receptor USB Logitech Unifying Easy-Switch: conecta hasta tres dispositivos y alterna entre ellos Retroiluminación activada por sensor de proximidad de manos Sensor de luz ambiental con ajuste automático', 116990, 'https://backend.dust2.gg/wp-content/uploads/2023/03/anyconvcom__475834-1200-auto-362cdc16-3c98-438c-9270-303e1ae635f6.png', 1),
('Mouse Trackball inalámbrico Logitech MX ERGO', 'Procesador AMD RYZEN 5 5800X Refrigeración Líquida Cooler Master 240mm 2 Ventiladores RGB Tarjeta de Video RTX 4060 Ti Gabinete Gamer NZXT H5 (Preguntar por color disponible) Almacenamiento Disco Sólido SSD M.2 1TB PCI-E', 65990, 'https://backend.dust2.gg/wp-content/uploads/2021/08/2-af575985-0f26-403d-8b56-992ae3f3c0bf.png', 1),
('Silla Gamer Fantech Alpha GC 283 Tank Red', 'Procesador AMD RYZEN 5 5800X Refrigeración Líquida Cooler Master 240mm 2 Ventiladores RGB Tarjeta de Video RTX 4060 Ti Gabinete Gamer NZXT H5 (Preguntar por color disponible) Almacenamiento Disco Sólido SSD M.2 1TB PCI-E', 126990, 'https://backend.dust2.gg/wp-content/uploads/2021/12/1-659a9448-70ac-4843-b1e3-d8b408b1207a.png', 1),
('Tarjeta de Video Gigabyte GeForce RTX 4060', 'Procesamiento Gráfico GeForce RTX™ 4060 Ti', 460990, 'https://backend.dust2.gg/wp-content/uploads/2023/09/geforce-rtx_173_173_tm-4060-ti-gaming-oc-8g-01-aac17f83-2774-4959-98c6-fa6147b75908-1.png', 1);

CREATE TABLE favoritos (
    user_id INT,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES productos(product_id),
    FOREIGN KEY (user_id) REFERENCES usuarios(user_id)
);

INSERT into favoritos (user_id, product_id) values
(1,1),(1,4),(1,5);