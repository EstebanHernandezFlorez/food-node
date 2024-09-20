export class EmployeesController {
    constructor ({ employeeModel }) {
      this.employeeModel = employeeModel
    }
  
    get = async (req, res) => {
      console.log(this.employeeModel);
      
      const data = await this.employeeModel.get() 
      console.log(data);
      
      res.status(200).json(data)
    }
  
    getById = async (req, res) => {
      const data = await this.employeeModel.getById(req.params.id)
      res.status(200).json(data)
    }
  
    post = async (req, res) => {
      const data = await this.employeeModel.post(req.body)
      res.status(201).json(data)
    }
  
    put = async (req, res) => {
      try {
        const id = req.params.id;
        const updateData = req.body;
        
        // Buscar el recurso antes de intentar actualizarlo
        const existingEmployee = await this.employeeModel.findBy(id);
        
        if (!existingEmployee) {
          return res.status(404).json({ message: 'Employee not found' });
        }
        
        const data = await (this.employeeModel).put(id, updateData);
        
        if (!data) {
          return res.status(404).json({ message: 'Employee not found after update' });
        }
        
        res.status(200).json(data);
      } catch (error) {
        console.error('Error updating employee:', error);
        res.status(500).json({ message: 'Error updating employee', error: error.message });
      }
    }
  
    delete = async (req, res) => {
      const data = await this.employeeModel.delete(req.params.id)
      res.status(200).json(data)
    }
  }
  