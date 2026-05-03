-- Check current food menu items
SELECT * FROM food_menu ORDER BY category, name;

-- Remove duplicates (run after checking which ones to remove)
-- Uncomment and modify IDs after checking the results above
-- DELETE FROM food_menu WHERE id = 'some-uuid-here';

-- Add new menu items
INSERT INTO food_menu (name, category, price, image, availability, description) VALUES
('Adobo', 'Main Course', 350, '', true, 'Classic Filipino braised pork dish with soy sauce and vinegar'),
('Sinigang na Baboy', 'Main Course', 380, '', true, 'Savory pork soup with tamarind broth and vegetables'),
('Bicol Express', 'Main Course', 320, '', true, 'Spicy Filipino stew made with pork and coconut milk'),
('Pancit Canton', 'Main Course', 280, '', true, 'Stir-fried noodles with vegetables and meat'),
'Liempo', 'Main Course', 420, '', true, 'Grilled pork ribs marinated in citrus and soy sauce'),
('Sizzling Sisig', 'Main Course', 380, '', true, 'Sizzling pork face with calamansi and chili peppers'),
('Kare-Kare', 'Main Course', 450, '', true, 'Oxtail stew with peanut sauce and vegetables'),
('Pinakbet', 'Main Course', 320, '', true, 'Mixed vegetable stew with pork and shrimp paste'),
('Lechon Kawali', 'Main Course', 400, '', true, 'Crispy deep-fried pork belly'),
('Biko', 'Dessert', 180, '', true, 'Filipino sticky rice cake with coconut milk and brown sugar'),
('Halo-Halo', 'Dessert', 250, '', true, 'Mixed dessert with shaved ice, sweet beans, fruits, and milk'),
('Leche Flan', 'Dessert', 150, '', true, 'Filipino caramel custard with caramel syrup'),
('Turon', 'Dessert', 120, '', true, 'Fried banana rolls wrapped in spring roll wrapper'),
('Buko Pandan', 'Beverage', 180, '', true, 'Sweet coconut and pandan jelly drink'),
('Calamansi Juice', 'Beverage', 120, '', true, 'Fresh Filipino lime juice'),
('Iced Tea', 'Beverage', 100, '', true, 'Classic sweetened tea served cold'),
('Soda', 'Beverage', 80, '', true, 'Various soft drinks available'),
('Coffee', 'Beverage', 150, '', true, 'Freshly brewed Filipino coffee'),
('Fried Rice', 'Side Dish', 120, '', true, 'Garlic fried rice served with main dishes'),
('Lumpiang Shanghai', 'Appetizer', 180, '', true, 'Filipino spring rolls filled with pork'),
('Chicharon', 'Appetizer', 150, '', true, 'Crispy pork cracklings with vinegar dip'),
('Ensaladang Talong', 'Appetizer', 140, '', true, 'Eggplant salad with tomatoes and onions'),
('Camote Cue', 'Appetizer', 130, '', true, 'Sweetened yam in caramel syrup');
