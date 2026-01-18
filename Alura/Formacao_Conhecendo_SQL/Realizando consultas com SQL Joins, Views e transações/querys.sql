CREATE VIEW ViewTotalPorPedido AS
SELECT 
    P.ID AS ID_Pedido,
    P.DataHoraPedido,
    C.Nome AS NomeCliente,
    SUM(IP.Quantidade * IP.PrecoUnitario) AS TotalPorPedido
FROM Pedidos AS P
JOIN Clientes AS C ON P.ID_Cliente = C.ID
JOIN ItensPedido AS IP ON P.ID = IP.ID_Pedido
GROUP BY P.ID, P.DataHoraPedido, C.Nome;

SELECT * FROM ViewTotalPorPedido;



CREATE TRIGGER CalculoFaturamentoDiario
AFTER INSERT ON ItensPedido
FOR EACH ROW
BEGIN
    DELETE FROM FaturamentoDiario ;
    INSERT INTO FaturamentoDiario (Dia, FaturamentoTotal)
    SELECT
     DATE(P.DataHoraPedido) AS Dia,
     SUM(IP.Quantidade * IP.PrecoUnitario) AS Faturamento
   FROM Pedidos AS P
   JOIN ItensPedido AS IP ON P.ID = IP.ID_Pedido
   GROUP BY Dia
   ORDER BY Dia;
END;
