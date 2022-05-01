const generatePage = (team) =>
{
    const generateManager = () =>
    {
        return `
        <div>
        <h2>${manager.getName()}</h2></div>`
    }
}

module.exports = pickedTeam =>
{
    return`
    <!DOCTYPE html>
    <html lang='en'>
    ${generatePage(pickedTeam)}
    
    </html>`
}