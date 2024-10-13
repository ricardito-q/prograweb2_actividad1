#procedures
DELIMITER //
CREATE PROCEDURE `pcruComprasemanal`(
IN `pTipo` VARCHAR(1),
IN `pidcomprasemanal` int,IN `pfechacompra` date,IN `pidproducto` int,IN `pcantidad` int,IN `ppreciototal` int)
begin
IF pTipo = 'C' then
IF pidcomprasemanal = 0 then
SET pidcomprasemanal = (SELECT(IFNULL(MAX(idcomprasemanal) + 1, 1)) FROM jrc_Comprasemanal);
END IF;
INSERT INTO jrc_Comprasemanal(
idcomprasemanal,fechacompra,idproducto,cantidad,preciototal,fecharegistro,estadoregistro)	values (
pidcomprasemanal,pfechacompra,pidproducto,pcantidad,ppreciototal,NOW(),1);
SELECT pidcomprasemanal AS idcomprasemanal;
END IF;
IF pTipo = 'R' then
SELECT * FROM jrc_Comprasemanal WHERE pidcomprasemanal=idcomprasemanal AND estadoregistro=1;
END IF;
IF pTipo = 'U' then
	update jrc_Comprasemanal SET estadoregistro=0 WHERE pidcomprasemanal = idcomprasemanal AND estadoregistro = 1; 
INSERT INTO jrc_Comprasemanal(
idcomprasemanal,fechacompra,idproducto,cantidad,preciototal,fecharegistro,estadoregistro)	values (
pidcomprasemanal,pfechacompra,pidproducto,pcantidad,ppreciototal,NOW(),1);
SELECT pidcomprasemanal AS idcomprasemanal;
END IF;
IF pTipo = 'D' then
	update jrc_Comprasemanal SET estadoregistro=0 WHERE pidcomprasemanal = idcomprasemanal AND estadoregistro = 1; 
END IF;
END//
DELIMITER ;

DELIMITER //
CREATE PROCEDURE `pcruProductosbasico`(
IN `pTipo` VARCHAR(1),
IN `pidproductosbasico` int,IN `pnombre` varchar(250),IN `pcategoria` varchar(250),IN `punidadmedida` varchar(250),IN `pcantidad` int,IN `ppreciounitario` int,IN `pfechacompra` date,IN `pfechacaducidad` date,IN `pobservaciones` varchar(250))
begin
IF pTipo = 'C' then
IF pidproductosbasico = 0 then
SET pidproductosbasico = (SELECT(IFNULL(MAX(idproductosbasico) + 1, 1)) FROM jrc_tProductosbasico);
END IF;
INSERT INTO jrc_tProductosbasico(
idproductosbasico,nombre,categoria,unidadmedida,cantidad,preciounitario,fechacompra,fechacaducidad,observaciones,fecharegistro,estadoregistro)	values (
pidproductosbasico,pnombre,pcategoria,punidadmedida,pcantidad,ppreciounitario,pfechacompra,pfechacaducidad,pobservaciones,NOW(),1);
SELECT pidproductosbasico AS idproductosbasico;
END IF;
IF pTipo = 'R' then
SELECT * FROM jrc_tProductosbasico WHERE pidproductosbasico=idproductosbasico AND estadoregistro=1;
END IF;
IF pTipo = 'U' then
	update jrc_tProductosbasico SET estadoregistro=0 WHERE pidproductosbasico = idproductosbasico AND estadoregistro = 1; 
INSERT INTO jrc_tProductosbasico(
idproductosbasico,nombre,categoria,unidadmedida,cantidad,preciounitario,fechacompra,fechacaducidad,observaciones,fecharegistro,estadoregistro)	values (
pidproductosbasico,pnombre,pcategoria,punidadmedida,pcantidad,ppreciounitario,pfechacompra,pfechacaducidad,pobservaciones,NOW(),1);
SELECT pidproductosbasico AS idproductosbasico;
END IF;
IF pTipo = 'D' then
	update jrc_tProductosbasico SET estadoregistro=0 WHERE pidproductosbasico = idproductosbasico AND estadoregistro = 1; 
END IF;
END//
DELIMITER ;

