import data from '../../public/data.json'

export default (req, res) => {
    res.status(200).json({ data })
}
