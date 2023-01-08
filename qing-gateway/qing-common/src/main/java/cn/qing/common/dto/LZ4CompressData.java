package cn.qing.common.dto;

import lombok.Data;

/**
 * @author conghuhu
 * @create 2023/1/8 18:54
 */
@Data
public class LZ4CompressData {
    private int length;

    private byte[] compressedData;

    public LZ4CompressData(final int length, final byte[] compressedData) {
        this.length = length;
        this.compressedData = compressedData;
    }
}
