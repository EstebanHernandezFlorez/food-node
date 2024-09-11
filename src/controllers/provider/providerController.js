export class ProviderController {
    constructor ({ providerModels }) {
      this.providerModels = providerModels
    }
  
    get = async (req, res) => {
      const data = await this.providerModels.get()
      res.status(200).json(data)
    }
  
    getById = async (req, res) => {
      const data = await this.providerModels.getById(req.params.id)
      res.status(200).json(data)
    }
  
    post = async (req, res) => {
      const data = await this.providerModels.post(req.body)
      res.status(201).json(data)
    }
  
    put = async (req, res) => {
      const data = await this.providerModels.put(req.params.id, req.body)
      res.status(200).json(data)
    }
  
    delete = async (req, res) => {
      const data = await this.providerModels.delete(req.params.id)
      res.status(200).json(data)
    }
    updateStatus = async (req, res) => {
        const { id } = req.params;
        const { status } = req.body; // Asegúrate de que el nuevo estado se envíe en el cuerpo de la solicitud
    
        try {
          // Verifica que el estado sea válido (esto depende de la lógica de tu aplicación)
          const validStatuses = ['Active', 'Inactive']; // Ejemplo de estados válidos
          if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: 'Estado inválido' });
          }
    
          // Actualiza el estado en el modelo
          const updatedProvider = await this.providerModels.updateStatus(id, status);
          
          if (!updatedProvider) {
            return res.status(404).json({ message: 'Registro no encontrado' });
          }
    
          res.status(200).json(updatedProvider);
        } catch (error) {
          res.status(500).json({ message: 'Error al actualizar el estado', error });
        }
      };
  }
  