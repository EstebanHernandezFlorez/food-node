
export class InputController {
    constructor ({ InputModel }) {
      this.InputModel = InputModel
    }
  
    get = async (req, res) => {
      const data = await this.InputModel.get()
      res.status(200).json(data)
    }
  
    getById = async (req, res) => {
      const data = await this.InputModel.getById(req.params.id)
      res.status(200).json(data)
    }
  
    post = async (req, res) => {
      const data = await this.InputModel.post(req.body)
      res.status(201).json(data)
    }
  
    put = async (req, res) => {
      const data = await this.InputModel.put(req.params.id, req.body)
      res.status(200).json(data)
    }
  
    delete = async (req, res) => {
      const data = await this.InputModel.delete(req.params.id)
      res.status(200).json(data)
    }
  }
  