// Test script to check all assets are properly defined
import { assets, municipalStaff, departmentData } from '../src/assets/assets.js'

console.log('=== ASSETS TEST ===')

// Check main assets
console.log('Logo:', assets.logo ? 'OK' : 'MISSING')
console.log('Menu icon:', assets.menu_icon ? 'OK' : 'MISSING')
console.log('Dropdown icon:', assets.dropdown_icon ? 'OK' : 'MISSING')
console.log('Cross icon:', assets.cross_icon ? 'OK' : 'MISSING')
console.log('Arrow icon:', assets.arrow_icon ? 'OK' : 'MISSING')
console.log('Verified icon:', assets.verified_icon ? 'OK' : 'MISSING')
console.log('Info icon:', assets.info_icon ? 'OK' : 'MISSING')

// Check department icons
console.log('Civil Registry icon:', assets.CivilRegistry ? 'OK' : 'MISSING')
console.log('Urban Planning icon:', assets.UrbanPlanning ? 'OK' : 'MISSING')
console.log('Finance icon:', assets.Finance ? 'OK' : 'MISSING')
console.log('Public Works icon:', assets.PublicWorks ? 'OK' : 'MISSING')
console.log('Health icon:', assets.Health ? 'OK' : 'MISSING')
console.log('Economic Development icon:', assets.EconomicDevelopment ? 'OK' : 'MISSING')

// Check staff images
for (let i = 1; i <= 15; i++) {
    const staffKey = `staff${i}`
    console.log(`Staff ${i}:`, assets[staffKey] ? 'OK' : 'MISSING')
}

// Check municipal staff data
console.log('Municipal staff count:', municipalStaff.length)
municipalStaff.forEach((staff, index) => {
    console.log(`Staff ${index + 1} (${staff.name}):`, staff.image ? 'Has image' : 'No image')
})

// Check department data
console.log('Department data count:', departmentData.length)
departmentData.forEach((dept, index) => {
    console.log(`Department ${index + 1} (${dept.department}):`, dept.image ? 'Has image' : 'No image')
})

console.log('=== END ASSETS TEST ===')
