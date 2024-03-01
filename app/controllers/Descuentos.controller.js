const Descuentos = require("../models/Descuentos.model");

const obtenerDescuentos = async (req, res) => {
  try {
    const descuentos = await Descuentos.find();
    res.json(descuentos);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al obtener los descuentos" });
  }
};

const agregarDescuento = async (req, res) => {
  try {
    const nuevoDescuento = new Descuentos(req.body);
    await nuevoDescuento.save();
    res.status(201).json(nuevoDescuento);
  } catch (error) {
    res.status(400).json({ mensaje: "Hubo un error al agregar el descuento" });
  }
};

const actualizarDescuento = async (req, res) => {
  try {
    const descuentoActualizado = await Descuentos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!descuentoActualizado) {
      return res.status(404).json({ mensaje: "Descuento no encontrado" });
    }
    res.json(descuentoActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al actualizar el descuento" });
  }
};

const eliminarDescuento = async (req, res) => {
  try {
    if (req.params.id) {
      // Si se proporciona un ID específico, eliminar ese descuento
      const descuentoEliminado = await Descuentos.findByIdAndDelete(req.params.id);
      if (!descuentoEliminado) {
        return res.status(404).json({ mensaje: "Descuento no encontrado" });
      }
      res.json({ mensaje: "Descuento eliminado correctamente" });
    } else {
      // Si no se proporciona un ID específico, eliminar todos los descuentos
      await Descuentos.deleteMany({});
      res.json({ mensaje: "Todos los descuentos han sido eliminados correctamente" });
    }
  } catch (error) {
    res.status(500).json({ mensaje: "Hubo un error al eliminar el descuento" });
  }
};

module.exports = {
  obtenerDescuentos,
  agregarDescuento,
  actualizarDescuento,
  eliminarDescuento,
};
