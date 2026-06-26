export const makes = [
  'Toyota', 'Ford', 'Honda', 'Chevrolet', 'BMW', 'Nissan',
  'Jeep', 'Hyundai', 'Kia', 'Subaru', 'Mazda', 'Volkswagen',
  'Mercedes-Benz', 'Audi', 'Ram', 'GMC', 'Dodge', 'Lexus', 'Volvo', 'Tesla',
  'Mahindra', 'Tata', 'Suzuki', 'Mitsubishi', 'Land Rover', 'Jaguar',
  'Porsche', 'Mini', 'Fiat', 'Renault', 'Peugeot', 'Acura'
].sort();

export function makeSlug(make: string) {
  return make.toLowerCase().replace(/[\s-]+/g, '-').replace(/[^a-z0-9-]/g, '');
}
