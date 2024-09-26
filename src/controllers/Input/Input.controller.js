
export class InputController {
    constructor ({ inputModel }) {
      this.inputModel = inputModel
    }
    
    //obtener los insumos
    get = async (req, res) => {
      try {
      const data = await this.inputModel.get()
      res.status(200).json(data)
      } catch (error) {
        res.status(500).json({ error: "Error al obtener los insumos" })
      }
    }
  
    //obtener insumo por id
    getById = async (req, res) => {
      try {
        const data = await this.inputModel.getById(req.params.id)
        if (!data) {
          res.status(404).json({ error: "Insumo no encontrado" })
          return
        }
        res.status(200).json(data)
      } catch (error) {
        res.status(500).json({ error: "Error al obtener el insumo" })
      }
    
    }
  
    //actualizar insumo
    post = async (req, res) => {
      try {
        const data = await this.inputModel.post(req.body)
        res.status(201).json(data)
      } catch (error) {
        res.status(500).json({ error: "Error al actualizar el insumo" })
      }
    }
  
    //actualizar insumo
    put = async (req, res) => {
      try {
        const data = await this.inputModel.put(req.params.id, req.body)
        if (!data) {
          res.status(404).json({ error: "Insumo no encontrado" })
          return
        }
        res.status(200).json(data)
      } catch (error) {
        res.status(500).json({ error: "Error al actualizar el insumo" })
      }
    }
    
    
    //borrar insumo
    delete = async (req, res) => {
      try {
        const data = await this.inputModel.delete(req.params.id)
        if (!data) {
          res.status(404).json({ error: "Insumo no encontrado" })
          return
        }
        res.status(200).json(data)
      } catch (error) {
        res.status(500).json({ error: "Error al borrar el insumo" })
      }
    }
  
  }
  